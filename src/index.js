const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron"),
  });
}

let mainWindow;
let newWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.on("close", () => {
    app.quit();
  });
});

function createNewWindow() {
  const newWindow = new BrowserWindow({
    title: "New Window",
  });
  newWindow.setMenu(null);
  newWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "views/newWindow.html"),
      protocol: "file",
      slashes: true,
    })
  );
}

const templateMenu = [
  {
    label: "File",
    submenu: [
      {
        label: "New",
        accelerator: "Ctrl+N",
        click() {
          createNewWindow();
        },
      },
    ],
  },
];

if (process.env.NODE_ENV !== 'production'){
  templateMenu.push({
    label: 'DevTools',
    submenu: [
      {
        label: 'Show/Hide Dev Tools',
        accelerator: 'Ctrl+D',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }

    ]
  })
}