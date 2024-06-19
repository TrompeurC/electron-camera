import { Menu, ipcMain , app, type MenuItemConstructorOptions } from "electron";


ipcMain.on('openMenu', (event) => {
  const menuArrau: MenuItemConstructorOptions[] = [{
    label: '退出',
    click(_) {
      app.quit()
    }
  }]
  const menu = Menu.buildFromTemplate(menuArrau)
  menu.popup()
})
