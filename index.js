const { app, BrowserWindow }  = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({
    title: 'Electron js'
  })
  win.loadURL(`file://${__dirname}/index.html`)
})