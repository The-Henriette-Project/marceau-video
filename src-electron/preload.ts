const { contextBridge, ipcRenderer } = require('electron')

console.log('Hello from Electron PRELOAD')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  setTitle2: (title) => ipcRenderer.invoke('set-title-2', title)
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





document.addEventListener('drop', (e) => {
  console.log('Hello from Electron PRELOAD DROP')

    e.preventDefault();
    e.stopPropagation();

    for (const f of e.dataTransfer.files) {
      console.log('File(s) you dragged here: ', f.path)
    }
  });
document.addEventListener('dragover', (e) => {
  console.log('Hello from Electron PRELOAD dragover')
    e.preventDefault();
    e.stopPropagation();
  });