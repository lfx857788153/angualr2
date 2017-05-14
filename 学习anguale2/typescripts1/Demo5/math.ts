// default表示默认导出， 导入时可以使用import square, {log10, PI} from './math'
export default function square(x) {
    return Math.pow(x, 2);
}

export function log10(x) {
    return Math.log10(x);
}

export const PI = Math.PI;

// 以上是单个导出

function squareV2(x) {
    return Math.pow(x, 2);
}

function log10V2(x) {
    return Math.log10(x);
}

const PIV2 = Math.PI;

// 多导出
export { squareV2, log10V2, PIV2 }


/**
 * 导出后就可以在别的模块中通过引用的方式使用了，比如node中的require()方法, argular2中的import关键字(ES2015的模块加载器)
 * 
 * 如：import {square, log10} from './math'
 * 
 * 另外特别注意，模块化语法带有隐式异步行为。比方说，我们有三个模块，A、B、C。模块A里面使用了模块B和C，
 * 所以A模块依赖这两个模块。因为存在这样的依赖关系，所以当用户请求模块A的时候，JavaScript模块加载器要先去加载B和C模块，
 * 然后才能调用模块A中的逻辑，而且B和C模块是异步加载的。当它们加载完成之后，JavaScript虚拟机才能运行A模块。
 */