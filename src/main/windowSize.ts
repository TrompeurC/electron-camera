import { BrowserWindow, ipcMain } from "electron";

ipcMain.on('setWindowSize', (event: Electron.IpcMainEvent, size: {
  aspectRatio: number
  width?: number,
  height?: number
}) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  win.setAspectRatio(size.aspectRatio)
  win.setBounds({ width: size.width, height: size.height })
})
