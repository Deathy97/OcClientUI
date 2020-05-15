const { BrowserWindow } = require("electron");

const url = require("url");
const path = require("path");

let window;

function createWindow(view) {
  window = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  });
  window.loadURL(
    url.format({
      pathname: path.join(__dirname, view),
      protocol: "file",
      slashes: true
    })
  )
};


module.exports = { createWindow }