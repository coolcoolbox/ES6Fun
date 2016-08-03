/**
 * @params:
 * @module : BaseSyntax
 * @author : cuss
 * @date : 2016-7-14 17:28:50
 * @description : 基本语法测试 参考阮一峰es6入门教程
 *                  1.定义变量以及对应的作用域
 *                  2.解构和对应的默认值
 *                  3.Generator函数 yield语句和*函数
 *                  4.Iterator函数
 *                  5.Thunk函数
 *                  6.Class语法
 *                  7.Decorator修饰器
 *                  8.MixIn模式
 *                  9.module方式
 *
 */

import Base from './pile/Base.js';
import {name,age,gName} from './pile/ExportPile';//引入属性
import expName from './pile/ExportPile';//引入默认值 这个属性名可以自取
export default class BaseSyntax {

    //es6增加了两种定义 1:let 2: const
    /*
     let类似于var，表示声明变量,区别就是let拥有了块作用域的概念，这个是以往不拥有的
     所谓的快级作用域，比如 if(){} {} for(){} while(){} 中的块级
     {
     这里表示一个块,在这个块中的元素外面是不能访问的
     let a = 'hello word!';
     }
     console.log(a);// error undefined a

     2. const 类似于静态变量不能进行修改
     */

    //测试在外面是否能访问会计变量a
    //测试常量的修改
    //
    testScope() {
        var arr = [1, 2, 3], result = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            var vaV = i;
            let leV = i;
        }
        try {
            vaV = 5; //访问块级作用域中的变量 能够访问
        } catch (e) {
            result.push('var var error');
        }
        try {
            leV = 5; //访问块级作用域中的变量 报错
        } catch (e) {
            result.push('let var error');
        }
        try {
            i = 5; //访问块级作用域中的变量 报错
        } catch (e) {
            result.push('let var error');
        }
        return result;
    }

    //测试const  const 表示不能改变改元素的指向  比如一个元素数组 const a = []; 其中是可以对a进行读写的  const a = [];再次执行则不行
    testChangeCOnst() {
        var result;
        var vaV = 3;
        const ct = 3;
        // 编译错误 不能进行复制
        try {
            /*  ct = 5;  const vaV = 6;*/
            throw new Error('syntax error');
        } catch (e) {
            result = 'const error'
        }
        return result;
    }

    //解析测试  注意如果后面的值为undefined表示未定义则使用默认值 如果后面的是null 表示这个值为null则会使用null
    //解析字符串
    testStringAnalysis() {
        //解析对象
        //eg 1 简单的解析
        var {a,b,v} = {a: 1, b: 2, v: 3};
        //eg 2 未对应解析
        //对应的规则则是与后面的对象对应key -> 赋值val
        var {a: a11,b: b11,v: v11} =  {a: 1, b: 2, v: 3};
        // eg 4 对象解析的复杂情况
        var {q=-1,w,e} =  {w: 2, e: 3};
        // eg 4 对象的解析默认值
        var {r=-1,t,y} =  {r: 2, t: 3, y: {h: 'hello'}};
        // eg 5 对象的解析解析值为undefined 和默认值为一个函数
        var {u=function () {
            return 1;
        }(),i,o} =  {u: undefined, i: 2, o: 3};

        // eg 6 解析对象的函数
        var {length: p} = 'ok';
        //返回一个对象{a:1,b:2,v:3,a11:1,b11:2,v11:3,q:-1,w:2,e:3,r:2,t:3,y:{h:"hello"},u:1,i:2,o:3,p:2}
        return {
            a, b, v, a11, b11, v11, q, w, e, r, t, y, u, i, o, p
        }
    }

    //解析数组 todo 原理实现了Iterator 接口的都可以进行解析 -> 暂且记住这个规则 后面在回顾
    testArrayAnalysis() {
        //解析数组
        //eg 1 基本的解析
        var [a,b,c] = [1, 2, 3];
        //eg 2 解析合成
        var [q,w,e,...r] = [1, 2, 3, 4, 5, 6];
        //eg 3 缺省数组的解析
        var [t,,y] = [1, 2, 3];
        //eg 4 默认值的解析 后面如果是undefined则是前面的值
        var [u=3,i] = [, 2];
        //eg 5 使用函数作为默认值的解析
        var [o,p = function () {
            return 2;
        }()] = [1];
        //返回对应的对象 {a:1,b:2,c:3,q:1,w:2,e:3,r:[4,5,6],t:1,y:3,u:3,i:2,o:1,p:2}
        return {
            a, b, c, q, w, e, r, t, y, u, i, o, p
        }
    }

    //测试Generator函数
    // 1.Generator 个人理解的Generator 生成一个函数 这个函数拥有一个指针 指向函数yield标  拥有一个自己的next方法 和状态值 执行next 走向下一个yield的时候停止 走向最后提个停止
    //      其中每一个Generator都有一个done 属性 表示当前的状态是否已经完成 当函数执行完之后 这个值为true在此执行往返操作
    // 2.yield 表示暂缓 不能在普通函数中使用 会报语法错误
    // 3.对应的Iterator函数 在#部分
    // 4.generator的捕获异常
    // 5.generator中的return方法 直接走到末尾 带参数 表示返回的value (例外:函数中有finally return表示在finally之后执行)
    // 6.generator中的generator 这个时候 generator必须带有* 否则是没有效果的
    // 7. 快速操作 对拥有iterator接口的对象 可以快捷遍历该对象 对任何对象设置iterator接口
    // 8. generator　中的this 指向当前的遍历对象
    testGenerator() {
        //下面的3个函数 依次返回 func1 func 2 func 3

        //测试基础的使用 可以作为暂缓函数  需要的时候在执行操作
        function testBase() {
            function* _f1() {
                return 3 + 1;
            }

            //生成generator函数 没有返回值
            return _f1();
        }

        //测试基本的流程
        function testYield() {
            function* _f2() {
                yield 'hello';
                yield 'world';
                return 'ending';
            }

            let f2f = _f2(); //生成generator函数
            let result = [];
            //执行操作

            result.push(f2f.next()); //{value: "hello", done: false}
            result.push(f2f.next()); //{value: "world", done: false}
            result.push(f2f.next()); //{value: "ending", done: true}
            result.push(f2f.next()); //{value: undefined, done: true}
            return result;
        }

        //测试yield中的传参 和对应的返回值
        function testParams() {

            function* _f3(num) {
                var y = yield num / 2;
                var x = yield y / 3;
                return x + y;
            }

            let result = [], result1 = [];
            let f3f = _f3(6);

            //执行 按照常规来想 应该是
            result.push(f3f.next()); //{value: 3, done: false} 实际是 {value: 3, done: false}
            result.push(f3f.next()); //{value: 1, done: false} 实际是 {value: NaN, done: false} 说明这里的返回的值 yield y/3 报错  y为undefined 为什么了 因为上一部yield解析完之后 指针在上一次的位置 这个时候执行next 没有任何的参数
            result.push(f3f.next()); //{value: 4, done: true} 实际是 {value: NaN, done: true}

            let f3f1 = _f3(6);
            result1.push(f3f1.next()); //{value: 3, done: false} 实际是 {value: 3, done: false} 24 12  6
            result1.push(f3f1.next(3)); //{value: 1, done: false} 实际是 {value: 1, done: false} 在这里执行的时候传递一个值进去 表示next上一次的指针位置  设置一个值为 3 则等于3 在继续往下走
            result1.push(f3f1.next(1)); //{value: 4, done: true} 实际是 {value: 4, done: true} 走到这里设置上一次指针的位置的值为 1 则x为1 继续往下走 return 1+3

            return {
                result, result1
            }
        }

        //异常捕获
        function testError() {
            // 1.正常捕获 generator 该异常为 generator对象抛出
            //      在内部捕获的时候当你执行的时候 如果指针没有走到最后 则捕获到该对象的异常 注意在内部捕获的时候 要注意快级作用域 当一个报错 try中的不会再次执行 如果没有try 直接走到函数末尾结束
            //      如果指针没有走到最后，异常会被里面的内容捕获
            //      推荐异常写在函数外部 generator不对异常做处理
            function* _f41(arr) {
                try {
                    yield 3;
                } catch (e) {
                    arr.push(e);
                }
                return 1
            }

            var f41, result = [];
            f41 = _f41(result);
            f41.next();
            try {
                f41.throw('inner error');
                f41.throw('out error');
            } catch (e) {
                result.push(e);
            }
            return {
                result
            }
        }

        //测试数组
        function testArr() {
            function* _f5(arr) {
                yield *arr;
            }

            var f51 = _f5([1, 2, 3, 4, 5]), result = [];
            result.push(f51.next().value);
            result.push(f51.next().value);
            result.push(f51.next().value);
            result.push(f51.next().value);
            result.push(f51.next().value);
            return result;
        }

        return {
            testBase,testYield,testParams,testError,testArr
        }
    }

    //测试遍历属性Iterator  这个表示这个对象是可以进行遍历的  只要实现了这个接口 就可以进行 所谓的 省略赋值 使用for of 方法进行遍历操作 原生的js对象 可以使用generator添加接口 进行使用for of方法
    // 意义 1. 提供对应的数据结构  可以对其进行解析遍历 说白了就是说我有这样一个对象 实现了 我就能根据我根据这个结构写的方法进行操作
    //创建 -> 执行next - > 走带第一个数据结构 ->next -> 如果有其他的就走到其他的位置上去 否则return位置
    // 说白了就是说对象中有对应的next方法 就可以进行遍历操作 原生的实现了Symbol.iterator的属性也可以进行操作 因为他拥有对应的next方法
    // 在es6中 数组、某些类似数组的对象、set、map  具备 iterator接口  可以使用对应的 arr[Symbol.iterator]() 得到对应的iterator
    // 对于伪数组 可以直接设置对象的 Symbol.iterator 接口等于数组的iterator 接口 即可
    testIterator() {

        //1. 给

        function testBase() {
            //设置一个iterator函数
            let re = [];
            //这是一个函数 传入一个对象 返回对象的key value
            class _iterator {
                constructor(obj) {
                    this.keys = Object.keys(obj);
                    this.start = -1;
                    this.obj = obj;
                }
                //部署这个借口 这个for of 的时候 调用这个 返回本对象 调用本对象的 next方法进行操作 也可以采用第二种方式  直接 *[Symbol.iterator]() 直接部署generator函数
                [Symbol.iterator]() {
                    return this;
                }
                next() {
                    this.start++;
                    if (this.start <this.keys.length) {
                        return {
                            done: false,
                            value: this.obj[this.keys[this.start]]
                        }
                    } else {
                        return {
                            done: true,
                            value: undefined
                        }
                    }
                }
            }

            class _iterator1 {
                constructor(obj) {
                    this.keys = Object.keys(obj);
                    this.start = 0;
                    this.obj = obj;
                }
                //部署这个借口 这个for of 的时候 调用这个 返回本对象 调用本对象的 next方法进行操作 也可以采用第二种方式  直接 *[Symbol.iterator]() 直接部署generator函数
            *[Symbol.iterator]() {
                for(;this.start <this.keys.length;this.start++){
                    yield  this.obj[this.keys[this.start]]
                }
            }

            }

            let it = new _iterator({
                a: 1, b: 2, c: 3
            });
            let it1 = new _iterator1({
                a: 1, b: 2, c: 3
            });
            for (let result of it) {
                re.push(result);
            }
            for (let result of it1) {
                re.push(result);
            }
            return re;
        }

        function testInject(){ //默认的数组已经实现了对应的Symbol.iterator接口
            var obj = 'ok',result = [],obj1 = {
                a:1,b:2
            };
            //设置对象的iterator借口
            obj1[Symbol.iterator] = function () {
                var that = this,
                    keys = Object.keys(that),
                    length = keys.length,
                    start = -1;
                return {
                    next: function () {
                        //
                        start ++;
                        if(start < length){
                            return {
                                done:false,
                                value:that[keys[start]]
                            }
                        }else{
                            return {
                                done:true,
                                value:undefined
                            }
                        }
                    }
                }
            };
            for(let v of obj){
                result.push(v);
            }
            for(let v of obj1){
                result.push(v);
            }
            return result;
        }
        return {
            testBase,
            testInject
        }
    }

    //测试trunk函数 这一段需要了解 promise  对此测试了对应的promise对象
    //trunk函数实现的意义 trunk函数就是为了实现所谓的传名调用 即使在需要的时候执行所谓的名 -> 通过函数的形式 在需要的时候计算 
    //可以对改造函数为trunk进行自动化自行 即使 写成trunk的形式 生成对应的generator函数 执行 ->next
    //为此es7中提出了async函数 这个就是语法糖  async ()=>{} 即使对应的generator函数  await替代了 yield  不过他可以自动执行 并且这个函数返回对应的promise对象即使在 async中处理完成之后 return值为resolve
    // 在async函数中 只要有一个出错 则会中断这个函数
    testTrunk(){
        //1.使用promise进行请求数据
        function testPromise(){
            //设置 trunk函数
            //传入 fn函数和参数 需要的时候才执行
            function _trunk(fn){
                //首先返回一个函数为执行 保存对应的状态
                return function (...args) {
                    return function (callback) {
                        return fn.call(this,...args,callback);
                    };

                }
            }
            //调用

            let add = _trunk(function (a,b) {
                return a+b;
            });
            return add(3,5)();
        }

        //测试流程管理
        function testProcess(){
            //首先可以对流程做相应的管理 ->生成 generator函数
            let result = [];
            function *gen(x){
                let y = yield  x*2;
                let z =  yield  y*y;
                return z;
            }

            function run(fn,...args){
                let gen = fn(args);
                //然后就开始执行函数

                function next(err,data){
                    var r = gen.next(data);
                    result.push(r.value);
                    //如果执行完毕 则返回r
                    if(r.done || err) return r;
                    //否则自动执行
                    next(null,r.value);
                }
                next();
            }
            //执行
            run(gen,2);
            return result;
        }

        return {
            testPromise,testProcess
        }
    }
    //开始测试async
    //todo 暂时不测试async es7语法
    testAsync(){
        //对应的Promise对象 通过 Utils取得
        //测试基础用法
        function testBaseAsync(){
     /*       let arrF = async function (x){
                let y = await x*2;
                let z = await y*y;
                return z;
            }
            //执行
            arrF()*/
            return 3;
        }

        //测试自动执行

        function testAutoAsync(){

        }

        return {
            testBaseAsync,testAutoAsync
        }

    }

    //测试Class语法
    // es6引入class 语法 目测是为了照顾传统程序员 ,提供一个语法糖来创建类 typeof 返回 function  并且他的prototype的constructor与此相等
    // 区别: 1.  class 中所有的方法都在起对用的prototype中 所以集成的话 就比较合理
    //       2.es6中的class不会变量提升
    //       3.es6中可以通过Symbol 写出私有方法
    //       4.在子类中 需要使用 super() 调用父类的构造方法 才能使用this 原因就是子类其实就是父元素生成之后 在对父元素进行处理 生成了子类 如果父元素没有进行加工 则不能使用this 因为this不存在 如果子类中不写constructor的话 会默认执行  Fun:constructor:super(...args);
    //       5. es6 中可以集成原生数据结构 比如 Array String等
    // 具体写法为
    /*
        eg. 1.声明一个类

        class Base {

            //构造函数 和传统的java语法类似 拥有super
            constructor(){

            }
        }
     */
    testClass(){

        //测试基本的class用法
        //包含构造函数  重写
        function testBaseClass(){

            let base = new Base(1,'Base');
            return base.toString();
        }

        //测试对应的class是否所有的方法都在prototype中
        function testPrototype(){

            let keys = Object.keys(Base.prototype), //发现 keys上并没有对应的值  说明在此原型链上
                prots = Object.getOwnPropertyNames(Base.prototype);

            return {
                keys,prots
            }

        }

        //测试es6的prototype  和es5中的prototype的区别
        function testESDeliver(){
            //首先是基本的es5中的集成
            //1.定义一个A
            function A(){
                this.name = 'A';
                this.getName = function () {
                    return this.name;
                }
            }

            //定义一个B 继承A
            //传统的写法
            function B(){
                this.name = "B";
            }

            B.prototype = new A();
            B.prototype.constructor = B;

            //测试第一个
            let a = new A(),
                b = new B();
            //测试es6中的类
            //1.定义一个基础类
            //2.集成Base
            class C extends Base{
                constructor(){
                    //调用父元素的构造器
                    super();
                    this.name = 'C';
                }
                getName(){
                    return this.name;
                }
            }

            let base = new Base(1,'Base'),
                c = new C();

            //测试对应生成对象的constructor
            let   resultES6 = [];
            //首先 在es5 中 对象的原型链中的constructor应该指向改类型
            //      实例对象 的__proto__ 即使该对象的原型 指向 该类型的prototype
            /*      构造函数 ----->prototype ----- >  原型对象 （<----------- constructor)   //主要展示在原型对象上
                      |                                 |
                      |                                 |
                    constructor                         |
                      实列 ----------> __proto__-------->
            */


            /*  在es6中的集成 首先每一个class 都有对应的原型对象  然后每一个原型对象指向对应的类型
                               然后在子类中 和 es5不一样的是子类的__proto__指向父类型 子类的prototype中的__proto__ 指向父类型的原型对象

                        父类 ----->prototype--->父亲的原型对象 （<----------- constructor)
                        |                               |
                        |                               |
                        |                               |
                        __proto__                 __proto__
                        子类--------->prototype--->子类的原型对象
                        |                               |
                        |                               |
                        |                               |
                        constructor                     |
                        实列----------------------> __proto__

             */
            //1.首先测试es6中不同的 子类的__proto__ 是否指向父类  子类的原型中的__proto__是否指向父亲原型对象
            // c 为实列 c的__proto__ 指向  子类的原型对象

            resultES6.push(C.__proto__ == Base); // 子类的___proto__指向父对象
            resultES6.push(c.__proto__ == C.prototype); // c 为实列 c的__proto__ 指向  子类的原型对象
            resultES6.push(c.__proto__.__proto__ == Base.prototype); //集成之后的子类C的原型对象的__proto__ 指向父元素 的原型对象
            return resultES6;
        }

        //测试变量提升

        function testVarUp(){
            let result = -1;
            try{
                let a = new A();
                class A{

                }
            }catch (e){
                result = 0;

            }

            return result;

        }

        //测试私有方法
        function testPrivate(){
            let getName =  Symbol('getName');
            class A{
                [getName](name){
                    return name;
                }
            }

            let a = new A(),result = -1;
            //访问私有方法报错 在内部可以进行调用
            try{
                a.getName();
            }catch (e){
                result = 0
            }
            return result;
        }

        //测试继承
        function testExtend(){

            class A{
                constructor(x,y){
                    this.x = x;
                    this.y = y;
                }
                add(){
                    return this.x + this.y
                }
            }

            class B extends A{
                constructor(x,y){
                    super(x,y);
                    this.total = x + y;
                }

                sum(){
                    return this.total;
                }
            }
            //编译报错 提示 'this' is not allowed before super() 说明使用this时候必须调用父元素的 super 并且super.xxx 可以调用父元素的方法
       /*     class C extends A{
                constructor(x,y){
                    this.total = x + y;
                }
                sum(){
                    return this.total;
                }
            }*/
/*
            let a = new A(1,2),
                b = new B(1,2),
                c = new C(1,2);

            return {aSum:a.add(),bSum:b.sum(),cSum:c.sum()}*/

            let a = new A(1,2),
                b = new B(1,2);

            return {aSum:a.add(),bSum:b.sum()}
        }
        //测试静态方法
        //静态方式测试出
        function testStatic(){
            let result = [];
            class A{
                constructor(){
                    this.proto = 50;
                }
                static ok(){
                    return 'A';
                }
            }

            class B extends A{
                constructor(args){
                    super(args);
                    this.proto = 30;
                }
                static ok1(){
                    return super.ok() + 'B';
                }
            }
            let a = new A(),
                b = new B();
            result.push(A.ok());//调用对应的静态函数
            result.push(a.proto);//使用es6的新的写法操作this
            result.push(B.ok());//
            result.push(b.proto);//
            result.push(B.ok1());//
            return result;
        }
        return {
            testBaseClass,testPrototype,testESDeliver,testVarUp,testPrivate,testExtend,testStatic
        }
    }

    //开始测试mixin
    testMixIn(){
        //把多个class合成到一个class当中
        function mix(...mixins){
            class Mix{}
            //遍历所有的参数 把对应的复制到Mixin中
            for(let mixin of mixins){
                _copyProperties(Mix,mixin);
                _copyProperties(Mix.prototype,mixin.prototype);
            }
            return Mix;

            function  _copyProperties(target,source){
                for(let key of Reflect.ownKeys(source)){
                    if(key !== 'constructor' &&key !== 'prototype'&&key !== 'name'){
                        let desc = Object.getOwnPropertyDescriptor(source,key);
                        Object.defineProperty(target,key,desc);
                    }
                }
            }
        }
        class A{
            getA(){
                return 'A'
            }
        }

        class B {
            getB(){
                return 'B';
            }
        }
        class C extends mix(A,B){
            getC(){
                return 'C';
            }
        }
        let  result = [];
        let c = new C();
        result.push(c.getA(),c.getB(),c.getC());
        return result;
    }

    //todo es7语法 暂时不测试
    testDecorator(){

    }

    //测试module
    //为了弥补在模块化的需求  增加了对应的import来引入对应的模块
    //在没有对应的标准之前 市面上有 amd 和cmd 规范 前者用于浏览器  后者用于服务器
    // es6的引用和传统的cmd的区别就是 传统的是在执行前就进编译 而es6是动态编译的 cmd值保存的值的拷贝 es6是指的引用 
    //cmd的循环加载的方式为  在执行到需要加载的对象的时候 找到该对象 进行执行 如果该对象有对应的引用 执行引用的结果 这个时候  当前的状态还没有执行完  如果另外一个对象在某一个点引用了初始对象 则引用到的初始的对象是没有执行完的结果
    //在es6中的加载方式  由于是动态的引用  比如在初始类型中 引用了一个 b 在b中又引用了a  运行过程是这样的  当a中引用b的时候 执行b  b中遇到引用a的时候执行 由于a已经开始执行 则继续执行下去 执行完之后再继续执行a中的类容
    //所以说安全的写法就是引用一个对象不引用其中某一个对象的值 比如 : require('http') noy require('http').xxx 因为xxx可能在某一个点的时候被别人所改变 导致结果出现问题
    //export 表示该模块导出的属性 import 引入的属性 并且import拥有提升特性
    //如果import的模块不export任何值 表示这个模块只是一个运行的模块(比如加载框架 或者做一些处理操作)
    //如果导出的属性过多 可以使用对应的*来简略的表达出所有的类型 这里不包括 default的属性
    //可以使用默认的导出 export default表示默认导出这个属性　这种情况的引入　可以直接饮用import Bse from './DefaultType'
    testModule(){
        let defaultName = expName(),
            getName = gName();

        return {
            name,age,getName,defaultName
        }
    }
}
