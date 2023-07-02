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
  
  ipcMain.on('saveFile1', (event, name) => {
    return writeTest1(name)
  })

  ipcMain.handle('saveFile2', (event, name) => {
    return writeTest2(name)
  })

  ipcMain.handle('saveFile3', (event, name) => {
    return writeTest3(name)
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

function writeTest1(name){
  const fs = require('fs');
  try { 
    console.log("writeTest1")
    fs.writeFileSync('myfile.txt', 'Test 1', 'utf-8'); 
    fs.writeFileSync(`${name}-test.txt`, 'Test 2', 'utf-8'); 
  } catch(e) { 
    console.error('Failed to save the file !'); 
  }
}

function writeTest2(name){
  const fs = require('fs/promises')
  try { 
    console.log("writeTest2")
    return fs.writeFile(`${name}-test-2.txt`, 'Test 3'); 
  } catch(e) { 
    console.log("writeTest2 error !")
    console.error('Failed to save the file async !'); 
    console.error(e); 
    console.error(e.message); 
  }
}

function writeTest3(name){
  const fs = require('fs/promises')
  const { dialog } = require('electron')

  try { 
    console.log("writeTest3")
    //return fs.writeFile(`${name}-test-2.txt`, 'Test 3'); 

    dialog.showSaveDialog({
      title: "Test dialog",
      message: "Test dialog message"
    }).then((result) => {
      if (result.canceled) {
        return;
      }

      return fs.writeFile(result.filePath, 'Test dialog'); 

    })

  } catch(e) { 
    console.log("writeTest3 error !")
  }
}