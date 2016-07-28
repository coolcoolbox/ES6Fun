/**
 * @params:
 * @module : PromiseObject
 * @author : cuss
 * @date : 2016-7-14 17:45:31
 * @description : Promise对象
 *
 */

// promise 函数 即是实现了promiseA的类型
/* promise 有三个状态
 1. pending 表示进行中
 2.resolved 表示已经完成
 3.rejected 表示已经失败
 以上的状态一经变化就不能更改
 注意的是 promise无法取消 并且promise需要设置回调来捕获异常
 */
export default class PromiseObject {
    //基本调用测试
    testBase(utils) {
        //创建promise对象  返回对应的promise对象
        let promise = new Promise((resolve, reject)=> {
            //进行回调操作
            //第一个表示 成功状态 第二个表示失败状态
            utils.getXMLRequest({
                url: "http://localhost:8088/assets/mock/users.json"
            }, resolve, reject)
        });
        return promise;
    }
    //错误测试

    testError() {
        //创建promise对象  返回对应的promise对象 如果对应的状态变为 resolved 再次抛出错误则是无效的 表面已经成功执行完成
        //在then中抛出的错误会在catch中进行处理
        let promise = new Promise((resolve, reject)=> {
            //进行回调操作
            //这个时候需要在相应的 reject中或者resolve中进行判断是否报错 不能直接抛出
            setTimeout(()=>{
                //catch 到错误
                reject( new Error('错误'));
            },1000);
        });
        return promise;
    }
    //测试直接抛出错误
    testErrorGalbal() {
        //创建promise对象  返回对应的promise对象
        //在then中抛出的错误会在catch中进行处理
        // 抛出错误的时候 默认表示为injected
        // 所以在写promise的时候 推荐的写法就是 对应的reject 为catch操作
        // 如果不写catch操作 promise的错误不会一直冒泡到上一级
        let promise = new Promise((resolve, reject)=> {
            //进行回调操作
             //catch 到错误
             throw new Error('错误');
        });
        return promise;
    }
    //测试所有的promise
    testPromiseAll(){
        //Promise.all([...]) 其中的为promise对象 当所有的都resolved 才会变成 resolved  如果一个为 injected 则会变成 injected

        let promise1 = new Promise((reolve,inject)=>{
                setTimeout(()=>{
                    reolve(1)
                },1000);
        });
        let promise2 = new Promise((reolve,inject)=>{
            setTimeout(()=>{
                reolve(2)
            },2000);

        });
        let promise3 = new Promise((reolve,inject)=>{

            setTimeout(()=>{
                reolve(3)
            },1500);
        });
        let promiseAll = Promise.all([promise1,promise2,promise3]);
        //data 为[1,3,2]? 还是[1,2,3]
        //结果为[1,2,3]
        return promiseAll;
    }

    //测试race  表示其中一个改变了换图 就跟着改变状态
    testPromiseRace(){
        //Promise.all([...]) 其中的为promise对象 当所有的都resolved 才会变成 resolved  如果一个为 injected 则会变成 injected

        let promise1 = new Promise((reolve,inject)=>{
            setTimeout(()=>{
                reolve(1)
            },1000);
        });
        let promise2 = new Promise((reolve,inject)=>{
            setTimeout(()=>{
                reolve(2)
            },2000);

        });
        let promise3 = new Promise((reolve,inject)=>{

            setTimeout(()=>{
                reolve(3)
            },1500);
        });
        let promiseRace = Promise.race([promise1,promise2,promise3]);
        //data 为[1,3,2]? 还是[1]
        //结果为[1]
        return promiseRace;
    }

    // promise对象的生成
    testInitPromise(){
        //这里会先执行 a 然后在执行对应的 promise
        let a = {
            then: function (resolve, reject) {
                resolve(12);
            }
        };
        let pms = Promise.resolve(a);
        return pms;
    }
}