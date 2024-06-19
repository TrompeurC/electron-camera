import { BrowserWindow, ipcMain } from "electron";


ipcMain.on('move', (event, pos: { x: number, y: number }) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  const [x, y] = win.getPosition()
  win.setPosition(pos.x + x, pos.y + y)
})
