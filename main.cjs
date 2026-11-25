const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({ width: 1200, height: 800, minWidth: 360, minHeight: 560, autoHideMenuBar: true, backgroundColor: "#160d2b", icon: path.join(__dirname, 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true } });
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/i.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file://')) { e.preventDefault(); if (/^https?:/i.test(url)) shell.openExternal(url); } });
  win.loadFile(path.join(__dirname, 'www', "index.html"));
}
const lock = app.requestSingleInstanceLock();
if (!lock) app.quit(); else {
  app.whenReady().then(() => { createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); }); });
}
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
