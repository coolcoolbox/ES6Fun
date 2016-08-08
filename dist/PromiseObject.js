(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.PromiseObject = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var PromiseObject = function () {
        function PromiseObject() {
            _classCallCheck(this, PromiseObject);
        }

        _createClass(PromiseObject, [{
            key: 'testBase',
            value: function testBase(utils) {
                //创建promise对象  返回对应的promise对象
                var promise = new Promise(function (resolve, reject) {
                    //进行回调操作
                    //第一个表示 成功状态 第二个表示失败状态
                    utils.getXMLRequest({
                        url: "http://localhost:8088/assets/mock/users.json"
                    }, resolve, reject);
                });
                return promise;
            }
        }, {
            key: 'testError',
            value: function testError() {
                //创建promise对象  返回对应的promise对象 如果对应的状态变为 resolved 再次抛出错误则是无效的 表面已经成功执行完成
                //在then中抛出的错误会在catch中进行处理
                var promise = new Promise(function (resolve, reject) {
                    //进行回调操作
                    //这个时候需要在相应的 reject中或者resolve中进行判断是否报错 不能直接抛出
                    setTimeout(function () {
                        //catch 到错误
                        reject(new Error('错误'));
                    }, 1000);
                });
                return promise;
            }
        }, {
            key: 'testErrorGalbal',
            value: function testErrorGalbal() {
                //创建promise对象  返回对应的promise对象
                //在then中抛出的错误会在catch中进行处理
                // 抛出错误的时候 默认表示为injected
                // 所以在写promise的时候 推荐的写法就是 对应的reject 为catch操作
                // 如果不写catch操作 promise的错误不会一直冒泡到上一级
                var promise = new Promise(function (resolve, reject) {
                    //进行回调操作
                    //catch 到错误
                    throw new Error('错误');
                });
                return promise;
            }
        }, {
            key: 'testPromiseAll',
            value: function testPromiseAll() {
                //Promise.all([...]) 其中的为promise对象 当所有的都resolved 才会变成 resolved  如果一个为 injected 则会变成 injected

                var promise1 = new Promise(function (reolve, inject) {
                    setTimeout(function () {
                        reolve(1);
                    }, 1000);
                });
                var promise2 = new Promise(function (reolve, inject) {
                    setTimeout(function () {
                        reolve(2);
                    }, 2000);
                });
                var promise3 = new Promise(function (reolve, inject) {

                    setTimeout(function () {
                        reolve(3);
                    }, 1500);
                });
                var promiseAll = Promise.all([promise1, promise2, promise3]);
                //data 为[1,3,2]? 还是[1,2,3]
                //结果为[1,2,3]
                return promiseAll;
            }
        }, {
            key: 'testPromiseRace',
            value: function testPromiseRace() {
                //Promise.all([...]) 其中的为promise对象 当所有的都resolved 才会变成 resolved  如果一个为 injected 则会变成 injected

                var promise1 = new Promise(function (reolve, inject) {
                    setTimeout(function () {
                        reolve(1);
                    }, 1000);
                });
                var promise2 = new Promise(function (reolve, inject) {
                    setTimeout(function () {
                        reolve(2);
                    }, 2000);
                });
                var promise3 = new Promise(function (reolve, inject) {

                    setTimeout(function () {
                        reolve(3);
                    }, 1500);
                });
                var promiseRace = Promise.race([promise1, promise2, promise3]);
                //data 为[1,3,2]? 还是[1]
                //结果为[1]
                return promiseRace;
            }
        }, {
            key: 'testInitPromise',
            value: function testInitPromise() {
                //这里会先执行 a 然后在执行对应的 promise
                var a = {
                    then: function then(resolve, reject) {
                        resolve(12);
                    }
                };
                var pms = Promise.resolve(a);
                return pms;
            }
        }]);

        return PromiseObject;
    }();

    exports.default = PromiseObject;
});