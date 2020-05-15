const { BrowserWindow } = require("electron");

const url = require("url");
const path = require("path");

let window;

function createWindow() {
  window = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  });
  window.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true
    })
  )
};


module.exports = { createWindow }