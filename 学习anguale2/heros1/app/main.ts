// 导入启动模块（platformBrowserDynamic），用来调起根模块AppModule
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 导入根模块（AppModule）
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`)) // then是根模块加载（启动）成功后执行的业务逻辑
  .catch(error => console.log(error)); // catch根模块在启动过程中如果出现错误或异常时执行的业务逻辑
