/**
 * @params:
 * @module : ReflectObject
 * @author : cuss
 * @date : 2016-7-14 17:46:01
 * @description : Proxy对象
 *
 */

//测试Reflect对象
//reflect 对象的用处 把原先绑在object中的一些方法 放到了这个函数里面 表示术业有专攻 并且重写了一些特性 弥补原来的不足
export default  class ReflectObject{
    //开始测试基本的语法
    testBase(){
        let obj = {};
        Reflect.defineProperty(obj,'name',{
            writable:true,
            enumerable:true,
            configurable:true,
            value:'cuss'
        });

        return obj;
    }

    //测试has
    testHas(){
        let obj = {
            name:'cuss'
        };
        return Reflect.has(obj,'name');

    }

    testGet(){
        let obj = {
            name:'cuss'
        };
        return Reflect.get(obj,'name');
    }

    //测试apply
    testApply(){
        function a(){
            return this.name;
        }
       return  Reflect.apply(a,{name:'cuss'},null);
    }
}