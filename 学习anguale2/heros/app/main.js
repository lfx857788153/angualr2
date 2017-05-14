"use strict";
// 导入启动模块（platformBrowserDynamic），用来调起根模块AppModule
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// 导入根模块（AppModule）
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log("Bootstrap success"); }) // then是根模块加载（启动）成功后执行的业务逻辑
    .catch(function (error) { return console.log(error); }); // catch根模块在启动过程中如果出现错误或异常时执行的业务逻辑
