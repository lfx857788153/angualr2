"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    // private 私有访问修饰符，只能在类DashboardComponent内部访问
    function DashboardComponent(router) {
        this.router = router;
        // 让heroes数组只能存储Hero类型的数据（Hero类型本质上是一个类，拥有特定的属性和方法）
        this.heroes = [
            { id: 1, name: 'dsh' },
            { id: 2, name: 'zhangsha' },
            { id: 3, name: 'lishi' }
        ];
    }
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var url = ['/detail', hero.id];
        // navigate()第一个形参是一个数组
        this.router.navigate(url);
        // angular2中URL跳转注意事项：
        /**
         * 1. 必须使用路由对象Router
         * 2. 通过构造函数声明Router对象
         * 3. 访问Router对象的navigate()
         */
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
// 如何给组件添加样式：
/**
 * 1. 直接在视图文件（templateUrl属性对应的文件）通过style标签添加内联样式
 * 2. 通过@Component注解的styleUrls属性绑定样式
 */ 
