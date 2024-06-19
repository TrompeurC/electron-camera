import { BrowserWindow, ipcMain } from "electron";

ipcMain.on('ignoreMouseEvent', (event , isIgnore: boolean) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  win.setIgnoreMouseEvents(isIgnore)
})
