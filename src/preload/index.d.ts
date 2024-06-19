import { ElectronAPI } from '@electron-toolkit/preload'

interface API {
  openMenu(): void
  move(pos: {x: number, y: number}): void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}
