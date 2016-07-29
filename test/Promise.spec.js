/**
 * Created by cuss on 2016/7/26.
 */
import Utils from '../src/Utils';
import PromiseObject from '../src/PromiseObject';


let users ;
beforeEach(function() {
    users = {
        "data":[
            {
                "userName":"张三",
                "userId":"1",
                "age":"55"
            },
            {
                "userName":"李四",
                "userId":"2",
                "age":"54"
            },
            {
                "userName":"王麻子",
                "userId":"3",
                "age":"53"
            }
        ]
    };
});

//测试promise对象
describe('ES6 PromiseObject Test', function () {
    let promiseObject = new PromiseObject(),
        utils = new Utils();
    this.timeout(15000);

    it('测试基本的用法', function () {
        let promise =  promiseObject.testBase(utils);
        return promise.then(data=>{
            expect(data).to.deep.equal(users);
        }, error=>{
            expect(error).equal('NOT FOUND')
        });
    });

    it('测试报错', function () {
        let promise =  promiseObject.testError();
        //这里测试报错 如果报错则说明测试正常
        return promise.then(data=>{
        }, error=>{
            //判断这里已经出现了错误 则抛出错误
            throw new Error('错误');
        }).catch(e=>{
            expect(e.message).equal('错误');
        });
    });
    //对错误的处理要小心一点
    //首先是如果测试相符合 则返回 done  否则catch对应的错误 done(e) 抛出异常
    it('测试直接报错', function () {
        let promise =  promiseObject.testErrorGalbal();
        //这里测试报错 如果报错则说明测试正常
        return promise.then(data=>{
        }, error=>{
            //判断这里已经出现了错误 则抛出错误
        }).catch(e=>{
            expect(e.message).equal('错误');
        });
    });

    it('测试Promise.all', function (done) {
        let promiseAll =  promiseObject.testPromiseAll();
        //所有的执行完 才会返回状态
        return promiseAll.then(data=>{
            expect(data).to.deep.equal([1,2,3]);
        }).then(()=>{
            done();
        }).catch(e=>{
            done(e);
        });
    });

    it('测试Promise.race', function (done) {
        let promiseRace =  promiseObject.testPromiseRace();
        //执行完一个则返回状态
        return promiseRace.then(data=>{
            expect(data).equal(1);
        }).then(()=>{
            done();
        }).catch(e=>{
            done(e)
        });
    });

    it('测试Promise.resolve', function (done) {
        let promiseRace =  promiseObject.testInitPromise();
        //调用resolve 把一个对象转换成promise对象
        return promiseRace.then(data=>{
            expect(data).equal(12);
        }).then(()=>{
            done();
        }).catch(e=>{
            done(e)
        });
    });
});