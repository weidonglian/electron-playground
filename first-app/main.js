const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    mainWindow.loadFile('index.html')

    mainWindow.on('close', ()=> {
        mainWindow = null
    })
})

app.on('window-all-closed', () => {
    app.quit()
})