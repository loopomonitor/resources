const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({title: 'Loop', icon: __dirname + '/application/loop/img/favicon.ico', width: 375, height: 605, resizable: false, fullscreenable: false});
  mainWindow.setMenu(null);
  mainWindow.loadURL(`file://${__dirname}/application/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
})