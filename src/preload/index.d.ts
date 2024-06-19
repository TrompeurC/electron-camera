import { ElectronAPI } from '@electron-toolkit/preload'

interface API {
  openMenu(): void
  move(pos: {x: number, y: number}): void
  setWindowSize(size: WindowSize): void
}

export interface WindowSize {
  aspectRatio: number
  width?: number
  height?: number
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}
