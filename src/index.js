const { createWindow } = require("./newWindow");
const { app, Menu } = require("electron");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron"),
  });
}

app.allowRendererProcessReuse = false;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
app.whenReady().then(() => {createWindow('views/ocLogin.html')});



app.on("ready", () => {
  const mainMenu = Menu.buildFromTemplate(templateMenu);
  Menu.setApplicationMenu(mainMenu);
});

const templateMenu = [
  {
    label: "File",
    submenu: [
      {
        label: "New",
        accelerator: "Ctrl+N",
        click() {
          console.log("Hi");
        },
      },
    ],
  },
];

if (process.env.NODE_ENV !== "production") {
  templateMenu.push({
    label: "DevTools",
    submenu: [
      {
        label: "Show/Hide Dev Tools",
        accelerator: "Ctrl+D",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
      },
    ],
  });
}
