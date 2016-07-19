/**
 * @params:
 * @module : BaseSyntax
 * @author : cuss
 * @date : 2016-7-14 17:28:50
 * @description : 基本语法测试 参考阮一峰es6入门教程
 *                  1.定义变量以及对应的作用域
 *                  2.解构和对应的默认值
 *                  3.yield语句和*函数
 *                  4.Generator函数
 *                  5.Iterator函数
 *                  6.Thunk函数
 *                  7.Class语法
 *                  8.Decorator修饰器
 *                  9.MixIn模式
 *                  10.module方式
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
        for(let i = 0,len = arr.length;i>len;i++){
            var vaV = i;
            let leV = i;
        }
        try{
            console.log(vaV); //访问块级作用域中的变量 能够访问
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
    testGenerator(){
        //下面的3个函数 依次返回 func1 func 2 func 3

        //测试基础的使用
        function _testBase(){
            function* __f1(){
                return 3+1;
            }
            //生成generator函数 没有返回值
            return __f1();

        }
        function _testYield(){
            function* _f1(){
                yield 'hello';
                yield 'world';
                return 'ending';
            }
            let f1f = _f1(); //生成generator函数
            let result = [];
            //执行操作

            result.push(f1f.next()); //{value: "hello", done: false}
            result.push(f1f.next()); //{value: "world", done: false}
            result.push(f1f.next()); //{value: "ending", done: true}
            result.push(f1f.next()); //{value: undefined, done: true}
            return result;
        }
        return {
            _testBase:_testBase,
            _testYield:_testYield
        }
    }

}
