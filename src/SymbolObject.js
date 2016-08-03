/**
 * @params:
 * @module : SymbolObject
 * @author : cuss
 * @date : 2016-7-14 17:47:01
 * @description : Symbol对象
 *
 * @history:
 *              开始进行Symbol对象  cuss
 *              2016-8-3 12:34:03
 */
//Symbol 这个东西表现出了一种独一无二的值 为js的第七种基本类型(number/bool/undefined/null/string/object/Symbol)
//由于是原始值 所以不能new
export default class SymbolObject{

    //测试Symbol的基础
    //测试Symbol的特性唯一性
    testBase(){
        let sm1 = Symbol(),
            sm2 = Symbol(),
            sm3 = Symbol('hello'),
            sm4 = Symbol('hello');

        return {
            smEqual:sm1 === sm2,
            strEqual:sm3 === sm4
        }
    }

    //测试Symbol作为属性名
    testAttribute(){
        let getName = Symbol('getName');

        let obj = {
            [getName]: function () {
                return 'symbolName';
            }
        };
        obj.getName = function () {
            return 'attributeName'
        };
        return{
            symbolName:obj[getName](),
            attributeName:obj.getName()
        }
    }

    //Symbol 处理为私有方法 (表面上的 实际可以用其他的方法获取到对象中的Symbol方法)
    testFunc(){
        let func1 = Symbol('func1');
        class A{
            constructor(){
                this.name = 'A'
            }
            [func1](){
                return 'func1'
            }
            func(){
                return this[func1]();
            }
        }
        let a = new A();
        //查看对应的属性
        let result = [];
        result.push(Object.keys(a)); //name
        result.push(Object.getOwnPropertyNames(a));//name
        result.push(Object.getOwnPropertySymbols(Object.getPrototypeOf(a))[0].toString()); //[Symbol(func1)]
        return result;
    }


}