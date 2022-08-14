const { app, BrowserWindow } = require('electron');

const startApp = () => {
  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== "darwin") app.quit();
  });
}

const createWindow = () => {
  const appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'App title',
    resizable: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });
  configureWindow(appWindow);
}

const configureWindow = (appWindow) => {
  appWindow.loadURL(`file://${__dirname}/dist/index.html`).then();
  appWindow.setMenu(null); // Remove window default menu.
  appWindow.on('closed', () => {
    appWindow = null;
  });
}

startApp();
