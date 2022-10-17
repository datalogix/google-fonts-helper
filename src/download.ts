import { Downloader, DownloadOptions } from './downloader'

export function download (url: string, options?: Partial<DownloadOptions>) {
  return new Downloader(url, options)
}
