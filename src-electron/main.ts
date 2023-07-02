const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

console.log('Hello from Electron MAIN')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
    },
  });

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  ipcMain.handle('set-title-2', (event, title) => {
    
    
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)

    return new Promise(function(resolve) {
        setTimeout(()=>{
          resolve("title after 3s !!");
        }, 3000);
    });

    
  })
  
  win.webContents.openDevTools();
  win.loadFile("dist/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});