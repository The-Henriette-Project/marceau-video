const { contextBridge, ipcRenderer } = require('electron')

console.log('Hello from Electron PRELOAD')



contextBridge.exposeInMainWorld('electron', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  setTitle2: (title) => ipcRenderer.invoke('set-title-2', title),
  save1: (name) => ipcRenderer.send('saveFile1', name),
  save2: (name) => ipcRenderer.invoke('saveFile2', name),
  save3: (name) => ipcRenderer.invoke('saveFile3', name),

  openVideoFile: (name) => ipcRenderer.invoke('openVideoFile', name)
  
})

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
