import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
    {path: '',redirectTo: '/dashboard',pathMatch: 'full'},
    {path: 'dashboard',component: DashboardComponent}
];
@NgModule({
    // 使用routes给RouterModule初始化
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents = [DashboardComponent];

// 使用路由注意事项：
/**
 * 1. NgModule, 让开发人员开发自定义的模块不用从头开始
 * 2. forRoot(), 导入RouterModule模块一定注意从配置项
 * 3. <base href="/"> index.html中设置当前页面所有链接的默认跳转路径
 * 4. routerLink， routerLinkActive， router-outlet
 */