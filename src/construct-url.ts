import { QueryObject, resolveURL, withHttps, withQuery } from 'ufo'
import { cartesianProduct, GOOGLE_FONTS_DOMAIN, isValidDisplay, parseFamilyName, parseStyle } from './utils'
import type { Families, GoogleFonts } from './types'

export function constructURL ({
  families,
  display,
  subsets,
  text
}: GoogleFonts = {}): string | false {
  const _subsets = (Array.isArray(subsets) ? subsets : [subsets]).filter(Boolean)
  const family = convertFamiliesToArray(families ?? {})

  if (family.length < 1) {
    return false
  }

  const query: QueryObject = {
    family
  }

  if (display && isValidDisplay(display)) {
    query.display = display
  }

  if (_subsets.length > 0) {
    query.subset = _subsets.join(',')
  }

  if (text) {
    query.text = text
  }

  return withHttps(withQuery(resolveURL(GOOGLE_FONTS_DOMAIN, 'css2'), query))
}

function convertFamiliesToArray (families: Families): string[] {
  const result: string[] = []

  Object.entries(families).forEach(([name, values]) => {
    if (!name) {
      return
    }

    name = parseFamilyName(name)

    if (typeof values === 'string' && String(values).includes('..')) {
      result.push(`${name}:wght@${values}`)
      return
    }

    if (Array.isArray(values) && values.length > 0) {
      result.push(`${name}:wght@${values.join(';')}`)
      return
    }

    if (Object.keys(values).length > 0) {
      const axes: Record<string, Array<string>> = {}
      let italicWeights: string[] = []

      Object
        .entries(values)
        .sort(([styleA], [styleB]) => styleA.localeCompare(styleB))
        .forEach(([style, weight]) => {
          const parsedStyle = parseStyle(style)
          if (parsedStyle === 'ital') {
            axes[parsedStyle] = ['0', '1']
            if (weight === true || weight === 400 || weight === 1) {
              italicWeights = ['*']
            } else {
              italicWeights = Array.isArray(weight) ? weight.map(w => String(w)) : [weight]
            }
          } else {
            axes[parseStyle(style)] = Array.isArray(weight) ? weight.map(w => String(w)) : [weight]
          }
        })

      const strictlyItalic: string[] = []

      if (Object.keys(axes).length === 1 && Object.hasOwn(axes, 'ital')) {
        if (!(italicWeights.includes('*') || (italicWeights.length === 1 && italicWeights.includes('400')))) {
          axes.wght = italicWeights
          strictlyItalic.push(...italicWeights)
        }
      } else if (Object.hasOwn(axes, 'wght') && !italicWeights.includes('*')) {
        strictlyItalic.push(...italicWeights.filter(w => !axes.wght.includes(w)))
        axes.wght = [...new Set([...axes.wght, ...italicWeights])]
      }

      const axisTagList = Object.keys(axes)
        .sort((axisA, axisB) => {
          const isLowerA = axisA[0] === axisA[0].toLowerCase()
          const isLowerB = axisB[0] === axisB[0].toLowerCase()

          if (isLowerA && !isLowerB) { return -1 }
          if (!isLowerA && isLowerB) { return 1 }

          return axisA.localeCompare(axisB)
        })

      if (axisTagList.length === 1 && axisTagList.includes('ital')) {
        result.push(`${name}:ital@1`)
        return
      }

      let axisTupleArrays: string[][] = cartesianProduct(...axisTagList.map((tag: string) => axes[tag]), [[]])
      const italicIndex = axisTagList.findIndex(i => i === 'ital')
      if (italicIndex !== -1) {
        const weightIndex = axisTagList.findIndex(i => i === 'wght')
        if (weightIndex !== -1) {
          axisTupleArrays = axisTupleArrays
            .filter((axisTuple: string[]) => (axisTuple[italicIndex] === '0' && !strictlyItalic.includes(axisTuple[weightIndex])) ||
              (axisTuple[italicIndex] === '1' && italicWeights.includes(axisTuple[weightIndex])))
        }
      }

      const axisTupleList = axisTupleArrays
        .sort((axisTupleA, axisTupleB) => {
          for (let i = 0; i < axisTupleA.length; i++) {
            const compareResult = parseInt(axisTupleA[i]) - parseInt(axisTupleB[i])
            if (compareResult !== 0) {
              return compareResult
            }
          }

          return 0
        })
        .map((axisTuple: string[]) => axisTuple.join(','))
        .join(';')

      result.push(`${name}:${axisTagList.join(',')}@${axisTupleList}`)
      return
    }

    if (values) {
      result.push(name)
    }
  })

  return result
}
