import { Stats, Dirent } from 'fs'

const __ELECTRON_ONLY__: {
  readFile(pathname: string): Promise<string>
  readdir(
    pathname: string,
    options?: { withFileTypes?: false }
  ): Promise<string[]>
  readdir(pathname: string, options: { withFileTypes: true }): Promise<Dirent[]>
  writeFile(pathname: string, data: string | Buffer): Promise<void>
  unlinkFile(pathname: string): Promise<void>
  stat(pathname: string): Promise<Stats>
  mkdir(pathname: string): Promise<void>
  readFileType(pathname: string): Promise<string>
  showOpenDialog(
    options: Electron.OpenDialogOptions
  ): Promise<Electron.OpenDialogReturnValue>
  getHomePath(): string
  openExternal(url: string): void
} = (window as any).__ELECTRON_ONLY__

const {
  readFile,
  readdir,
  writeFile,
  unlinkFile,
  stat,
  mkdir,
  readFileType,
  showOpenDialog,
  getHomePath,
  openExternal,
} = __ELECTRON_ONLY__ || {}

export {
  readFile,
  readdir,
  writeFile,
  unlinkFile,
  stat,
  mkdir,
  readFileType,
  showOpenDialog,
  getHomePath,
  openExternal,
}