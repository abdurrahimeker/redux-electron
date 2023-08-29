const { app, BrowserWindow, Menu, Notification } = require("electron");

const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#00000000", // Pencerenin arkaplan rengini ayarlar (şu an tamamen saydam)
    transparent: true,
    frame: false, // Pencerenin title bar
    webPreferences: {
      nodeIntegration: true, // React ile Node.js entegrasyonunu etkinleştirin
    },
  });

  mainWindow.loadURL("http://localhost:3001");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

const mainMenuTemplate = [
  {
    label: "BNet",
    submenu: [
      {
        label: "bişeyler",
      },
      {
        label: "geliştirici seçenekleri",
        click: function () {
          mainWindow.webContents.openDevTools();
          // this needs to be figured out
        },
      },
    ],
  },
];

// ipcMain.on("show-notification", (event, args) => {
//   const { title, body } = args;
//   const notification = new Notification({
//     title: title,
//     body: body,
//   });
//   notification.show();
// });

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
