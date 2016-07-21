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
        var arr = [1,2,3],result = [];
        for(let i = 0,len = arr.length;i<len;i++){
            var vaV = i;
            let leV = i;
        }
        try{
            vaV = 5; //访问块级作用域中的变量 能够访问
        }catch (e){
            result.push('var var error');
        }
        try{
            console.log(leV); //访问块级作用域中的变量 报错
        }catch (e){
            result.push('let var error');
        }
        try{
            console.log(i); //访问块级作用域中的变量 报错
        }catch (e){
            result.push('let var error');
        }
        return result;
    }
    //测试const  const 表示不能改变改元素的指向  比如一个元素数组 const a = []; 其中是可以对a进行读写的  const a = [];再次执行则不行
    testChangeCOnst(){
        var result;
        var vaV = 3;
        const ct = 3;
        // 编译错误 不能进行复制
        try{
          /*  ct = 5;  const vaV = 6;*/
            throw new Error('syntax error');
        }catch (e){
            result = 'const error'
        }
        return result;
    }
    //解析测试  注意如果后面的值为undefined表示未定义则使用默认值 如果后面的是null 表示这个值为null则会使用null
    //解析字符串
    testStringAnalysis(){
        //解析对象
        //eg 1 简单的解析
        var {a,b,v} = {a:1,b:2,v:3};
        //eg 2 未对应解析
        //对应的规则则是与后面的对象对应key -> 赋值val
        var {a:a11,b:b11,v:v11} =  {a:1,b:2,v:3};
        // eg 4 对象解析的复杂情况
        var {q=-1,w,e} =  {w:2,e:3};
        // eg 4 对象的解析默认值
       var {r=-1,t,y} =  {r:2,t:3,y:{h:'hello'}};
        // eg 5 对象的解析解析值为undefined 和默认值为一个函数
        var {u=function () {
            return 1;
        }(),i,o} =  {u:undefined,i:2,o:3};

        // eg 6 解析对象的函数
        var {length:p} = 'ok';
        //返回一个对象{a:1,b:2,v:3,a11:1,b11:2,v11:3,q:-1,w:2,e:3,r:2,t:3,y:{h:"hello"},u:1,i:2,o:3,p:2}
        return {
            a,b,v,a11,b11,v11,q,w,e,r,t,y,u,i,o,p
        }
    }
    //解析数组 todo 原理实现了Iterator 接口的都可以进行解析 -> 暂且记住这个规则 后面在回顾
    testArrayAnalysis(){
        //解析数组
        //eg 1 基本的解析
        var [a,b,c] = [1,2,3];
        //eg 2 解析合成
        var [q,w,e,...r] = [1,2,3,4,5,6]
        //eg 3 缺省数组的解析
        var [t,,y] = [1,2,3];
        //eg 4 默认值的解析 后面如果是undefined则是前面的值
        var [u=3,i] = [,2];
        //eg 5 使用函数作为默认值的解析
        var [o,p = function () {
           return 2;
        }()] = [1];
        //返回对应的对象 {a:1,b:2,c:3,q:1,w:2,e:3,r:[4,5,6],t:1,y:3,u:3,i:2,o:1,p:2}
        return {
            a,b,c,q,w,e,r,t,y,u,i,o,p
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
    testGenerator(){
        //下面的3个函数 依次返回 func1 func 2 func 3

        //测试基础的使用 可以作为暂缓函数  需要的时候在执行操作
        function _testBase(){
            function* __f1(){
                return 3+1;
            }
            //生成generator函数 没有返回值
            return __f1();
        }
        //测试基本的流程
        function _testYield(){
            function* __f2(){
                yield 'hello';
                yield 'world';
                return 'ending';
            }
            let f2f = __f2(); //生成generator函数
            let result = [];
            //执行操作

            result.push(f2f.next()); //{value: "hello", done: false}
            result.push(f2f.next()); //{value: "world", done: false}
            result.push(f2f.next()); //{value: "ending", done: true}
            result.push(f2f.next()); //{value: undefined, done: true}
            return result;
        }
        //测试yield中的传参 和对应的返回值
        function _testParams(){

            function* __f3(num){
                var y = yield num/2;
                var x = yield y/3;
                return x+y;
            }
            let result = [],result1 = [];
            let f3f = __f3(6);

            //执行 按照常规来想 应该是
            result.push(f3f.next()); //{value: 3, done: false} 实际是 {value: 3, done: false}
            result.push(f3f.next()); //{value: 1, done: false} 实际是 {value: NaN, done: false} 说明这里的返回的值 yield y/3 报错  y为undefined 为什么了 因为上一部yield解析完之后 指针在上一次的位置 这个时候执行next 没有任何的参数
            result.push(f3f.next()); //{value: 4, done: true} 实际是 {value: NaN, done: true}

            let f3f1 = __f3(6);
            result1.push(f3f1.next()); //{value: 3, done: false} 实际是 {value: 3, done: false} 24 12  6
            result1.push(f3f1.next(3)); //{value: 1, done: false} 实际是 {value: 1, done: false} 在这里执行的时候传递一个值进去 表示next上一次的指针位置  设置一个值为 3 则等于3 在继续往下走
            result1.push(f3f1.next(1)); //{value: 4, done: true} 实际是 {value: 4, done: true} 走到这里设置上一次指针的位置的值为 1 则x为1 继续往下走 return 1+3

            return {
                result,result1
            }
        }

        //异常捕获
        function _testError(){
            // 1.正常捕获 generator 该异常为 generator对象抛出
            //      在内部捕获的时候当你执行的时候 如果指针没有走到最后 则捕获到该对象的异常 注意在内部捕获的时候 要注意快级作用域 当一个报错 try中的不会再次执行 如果没有try 直接走到函数末尾结束
            //      如果指针没有走到最后，异常会被里面的内容捕获
            //      推荐异常写在函数外部 generator不对异常做处理
            function* __f41(arr){
                try{
                    yield 3;
                }catch (e){
                    arr.push(e);
                }
                return 1
            }

            var f41 ,result = [];
            f41 = __f41(result);
            f41.next();
            try{
                f41.throw('inner error');
                f41.throw('out error');
            }catch (e){
                result.push(e);
            }
            return {
                result
            }
        }

        function _testArr(){
            function* __f5(arr){
                yield *arr;
            }
            var f51 = __f5([1,2,3,4,5]),result = [];
            result.push(f51.next().value);
            result.push(f51.next().value);
            result.push(f51.next().value);
            result.push(f51.next().value);
            result.push(f51.next().value);
            return result;
        }
        return {
            _testBase:_testBase,
            _testYield:_testYield,
            _testParams:_testParams,
            _testError:_testError,
            _testArr:_testArr
        }
    }

    //测试遍历属性Iterator  这个表示这个对象是可以进行遍历的  只要实现了这个接口 就可以进行 所谓的 省略赋值 使用for of 方法进行遍历操作 原生的js对象不具备yield接口 可以使用generator添加接口 进行使用for of方法
    // 意义 1. 提供对应的数据结构  可以对其进行解析遍历 说白了就是说我有这样一个对象 实现了 我就能根据我根据这个结构写的方法进行操作
    //创建 -> 执行next - > 走带第一个数据结构 ->next -> 如果有其他的就走到其他的位置上去 否则return位置
    // 说白了就是说对象中有对应的next方法 就可以进行遍历操作 原生的实现了Symbol.iterator的属性也可以进行操作 因为他拥有对应的next方法
    testIterator(){

        //1. 给
    }

}
