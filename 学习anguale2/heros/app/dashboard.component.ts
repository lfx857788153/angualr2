import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
  // 让heroes数组只能存储Hero类型的数据（Hero类型本质上是一个类，拥有特定的属性和方法）
  heroes: Hero[] = [
    { id: 1, name: 'dsh' },
    { id: 2, name: 'zhangsha' },
    { id: 3, name: 'lishi' }
  ];

  // private 私有访问修饰符，只能在类DashboardComponent内部访问
  constructor(private router: Router) {
  }

  gotoDetail(hero) {
    let url = ['/detail', hero.id];
    // navigate()第一个形参是一个数组
    this.router.navigate(url);

    // angular2中URL跳转注意事项：
    /**
     * 1. 必须使用路由对象Router
     * 2. 通过构造函数声明Router对象
     * 3. 访问Router对象的navigate()
     */
  }
}

export class Hero {
  id: number;
  name: string;
}
// 如何给组件添加样式：
/**
 * 1. 直接在视图文件（templateUrl属性对应的文件）通过style标签添加内联样式
 * 2. 通过@Component注解的styleUrls属性绑定样式
 */