/**
 * @params:
 * @module : ProxyObject
 * @author : cuss
 * @date : 2016-7-14 17:45:46
 * @description : Proxy对象
 *
 */

//测试proxy对象
export default
class ProxyObject {

    //测试proxy对象的基本用法
    //proxy 可以设置一些代理  对于访问对象的一些方法 或者执行一些方法进行处理  也可以加在原型链当中 当某对象中没有的时候 访问原型链 可以做你能根据这个使用的方法
    //set 拦截对对象的设值
    //get 拦截对对象的取值
    //has 拦截对应的  obj in arrs
    //deleteProperty 拦截对应的delete
    //apply 拦截对此函数的调用
    //constructor 拦截作为构造函数的调用
    //等等其他的方法
    testBase() {
        let obj = {
            name: 'cuss',
            age: 25
        };
        let proxyObj = new Proxy(obj, {
            set: function (target,key,value,receiver) {
                //对对象设置值 如果源对象中没有 则不能进行设置
                if(key === 'time'){
                    target['time'] =  value;
                }else{
                    if(key in target){
                        target[key] = value;
                        return target;
                    }else{
                        throw new ReferenceError('Property ' + key +' not exist')
                    }
                }
            },
            get: function (target, key, value, receiver) {
                //获取原始对象的数据 如果是undefined或者空则返回'';
                //如果访问time  显示上一次访问的时间
                let result;

                if(key === 'time'){
                    let date;
                    if(!target['time']){
                        target['time'] =  + new Date;
                        return target['time'] ;
                    }else{
                        date =  target['time'];
                        return date;
                    }
                }
                //设置当前的时间
                target['time'] =  + new Date;
                if(key in target){
                    result = target[key];
                    return result === undefined ||  result === null ?'': target[key];
                }else{
                    throw new ReferenceError('Property ' + key +' not exist')
                }
            }
        });

        let result = [];
        //访问数据
        result.push(proxyObj.age);
        result.push(proxyObj.name);

        //设置值
        proxyObj.age = 26;

        result.push(proxyObj.age);


        return result;
    }
    
    testApply(){
        function a(age){
            return {
                name:'a',
                age:age
            }
        }
        let proxy = new Proxy(a,{
            apply:function(target,ctx,args){
                return new target(args[0])
            }
        });

        return proxy(25);
    }
    
    testConstructor(){
        function a(age){
            this.name = 'a';
            this.age = age;
        }
        let proxy = new Proxy(a,{
            construct:function(target,args){
                return new target(args[0])
            }
        });

        return new proxy(24);
    }
    testHas(){
        let obj = [1,2,3,4,5,6];
        
        let proxy = new Proxy(obj,{
            has: function (target,key) {
                if(key == 3){
                    return false
                }else{
                    return key in target;
                }
            }
        });
        let result = [];

        for(let k in proxy){
            result.push(proxy[k]);
        }
        return result
    }

}