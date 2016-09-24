const electron  = require('electron');
const {app, BrowserWindow, NativeImage} = electron;


app.on('ready',function(){
    var mainWindow = new BrowserWindow({
        'width': 1200,
        'height': 600,
        'icon' : __dirname + '/icon.png'
    });

    mainWindow.loadURL('file://'+__dirname + '/app/index.html');
});
