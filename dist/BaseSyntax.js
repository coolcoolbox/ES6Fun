(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './pile/Base.js', './pile/ExportPile'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./pile/Base.js'), require('./pile/ExportPile'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Base, global.ExportPile);
        global.BaseSyntax = mod.exports;
    }
})(this, function (exports, _Base2, _ExportPile) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _Base3 = _interopRequireDefault(_Base2);

    var _ExportPile2 = _interopRequireDefault(_ExportPile);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

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

    var BaseSyntax = function () {
        function BaseSyntax() {
            _classCallCheck(this, BaseSyntax);
        }

        _createClass(BaseSyntax, [{
            key: 'testScope',
            value: function testScope() {
                var arr = [1, 2, 3],
                    result = [];
                for (var _i = 0, len = arr.length; _i < len; _i++) {
                    var vaV = _i;
                    var _leV = _i;
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
        }, {
            key: 'testChangeCOnst',
            value: function testChangeCOnst() {
                var result;
                var vaV = 3;
                var ct = 3;
                // 编译错误 不能进行复制
                try {
                    /*  ct = 5;  const vaV = 6;*/
                    throw new Error('syntax error');
                } catch (e) {
                    result = 'const error';
                }
                return result;
            }
        }, {
            key: 'testStringAnalysis',
            value: function testStringAnalysis() {
                var _a$b$v = { a: 1, b: 2, v: 3 };
                var
                //解析对象
                //eg 1 简单的解析
                a = _a$b$v.a;
                var b = _a$b$v.b;
                var v = _a$b$v.v;
                var _a$b$v2 = { a: 1, b: 2, v: 3 };
                var a11 = _a$b$v2.a;
                var b11 = _a$b$v2.b;
                var v11 = _a$b$v2.v;
                var _w$e = { w: 2, e: 3 };
                var _w$e$q = _w$e.q;
                var
                // eg 4 对象解析的复杂情况
                q = _w$e$q === undefined ? -1 : _w$e$q;
                var w = _w$e.w;
                var e = _w$e.e;
                var _r$t$y = { r: 2, t: 3, y: { h: 'hello' } };
                var _r$t$y$r = _r$t$y.r;
                var
                // eg 4 对象的解析默认值
                r = _r$t$y$r === undefined ? -1 : _r$t$y$r;
                var t = _r$t$y.t;
                var y = _r$t$y.y;
                var _u$i$o = { u: undefined, i: 2, o: 3 };
                var _u$i$o$u = _u$i$o.u;
                var
                // eg 5 对象的解析解析值为undefined 和默认值为一个函数
                u = _u$i$o$u === undefined ? function () {
                    return 1;
                }() : _u$i$o$u;
                var i = _u$i$o.i;
                var o = _u$i$o.o;
                var _ok = 'ok';
                var p = _ok.length;

                //返回一个对象{a:1,b:2,v:3,a11:1,b11:2,v11:3,q:-1,w:2,e:3,r:2,t:3,y:{h:"hello"},u:1,i:2,o:3,p:2}
                return {
                    a: a, b: b, v: v, a11: a11, b11: b11, v11: v11, q: q, w: w, e: e, r: r, t: t, y: y, u: u, i: i, o: o, p: p
                };
            }
        }, {
            key: 'testArrayAnalysis',
            value: function testArrayAnalysis() {
                var a = 1;
                var b = 2;
                var c = 3;
                var q = 1;
                var w = 2;
                var e = 3;
                var r = [4, 5, 6];
                var _ref = [1, 2, 3];
                var t = _ref[0];
                var y = _ref[2];

                var _ref2;

                var u = _ref2 === undefined ? 3 : _ref2;
                var i = 2;
                var _ref3 = [1];
                var o = _ref3[0];
                var _ref3$ = _ref3[1];
                var p = _ref3$ === undefined ? function () {
                    return 2;
                }() : _ref3$;

                //返回对应的对象 {a:1,b:2,c:3,q:1,w:2,e:3,r:[4,5,6],t:1,y:3,u:3,i:2,o:1,p:2}
                return {
                    a: a, b: b, c: c, q: q, w: w, e: e, r: r, t: t, y: y, u: u, i: i, o: o, p: p
                };
            }
        }, {
            key: 'testGenerator',
            value: function testGenerator() {
                //下面的3个函数 依次返回 func1 func 2 func 3

                //测试基础的使用 可以作为暂缓函数  需要的时候在执行操作
                function testBase() {
                    var _marked = [_f1].map(regeneratorRuntime.mark);

                    function _f1() {
                        return regeneratorRuntime.wrap(function _f1$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        return _context.abrupt('return', 3 + 1);

                                    case 1:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _marked[0], this);
                    }

                    //生成generator函数 没有返回值
                    return _f1();
                }

                //测试基本的流程
                function testYield() {
                    var _marked2 = [_f2].map(regeneratorRuntime.mark);

                    function _f2() {
                        return regeneratorRuntime.wrap(function _f2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        _context2.next = 2;
                                        return 'hello';

                                    case 2:
                                        _context2.next = 4;
                                        return 'world';

                                    case 4:
                                        return _context2.abrupt('return', 'ending');

                                    case 5:
                                    case 'end':
                                        return _context2.stop();
                                }
                            }
                        }, _marked2[0], this);
                    }

                    var f2f = _f2(); //生成generator函数
                    var result = [];
                    //执行操作

                    result.push(f2f.next()); //{value: "hello", done: false}
                    result.push(f2f.next()); //{value: "world", done: false}
                    result.push(f2f.next()); //{value: "ending", done: true}
                    result.push(f2f.next()); //{value: undefined, done: true}
                    return result;
                }

                //测试yield中的传参 和对应的返回值
                function testParams() {
                    var _marked3 = [_f3].map(regeneratorRuntime.mark);

                    function _f3(num) {
                        var y, x;
                        return regeneratorRuntime.wrap(function _f3$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        _context3.next = 2;
                                        return num / 2;

                                    case 2:
                                        y = _context3.sent;
                                        _context3.next = 5;
                                        return y / 3;

                                    case 5:
                                        x = _context3.sent;
                                        return _context3.abrupt('return', x + y);

                                    case 7:
                                    case 'end':
                                        return _context3.stop();
                                }
                            }
                        }, _marked3[0], this);
                    }

                    var result = [],
                        result1 = [];
                    var f3f = _f3(6);

                    //执行 按照常规来想 应该是
                    result.push(f3f.next()); //{value: 3, done: false} 实际是 {value: 3, done: false}
                    result.push(f3f.next()); //{value: 1, done: false} 实际是 {value: NaN, done: false} 说明这里的返回的值 yield y/3 报错  y为undefined 为什么了 因为上一部yield解析完之后 指针在上一次的位置 这个时候执行next 没有任何的参数
                    result.push(f3f.next()); //{value: 4, done: true} 实际是 {value: NaN, done: true}

                    var f3f1 = _f3(6);
                    result1.push(f3f1.next()); //{value: 3, done: false} 实际是 {value: 3, done: false} 24 12  6
                    result1.push(f3f1.next(3)); //{value: 1, done: false} 实际是 {value: 1, done: false} 在这里执行的时候传递一个值进去 表示next上一次的指针位置  设置一个值为 3 则等于3 在继续往下走
                    result1.push(f3f1.next(1)); //{value: 4, done: true} 实际是 {value: 4, done: true} 走到这里设置上一次指针的位置的值为 1 则x为1 继续往下走 return 1+3

                    return {
                        result: result, result1: result1
                    };
                }

                //异常捕获
                function testError() {
                    var _marked4 = [_f41].map(regeneratorRuntime.mark);

                    // 1.正常捕获 generator 该异常为 generator对象抛出
                    //      在内部捕获的时候当你执行的时候 如果指针没有走到最后 则捕获到该对象的异常 注意在内部捕获的时候 要注意快级作用域 当一个报错 try中的不会再次执行 如果没有try 直接走到函数末尾结束
                    //      如果指针没有走到最后，异常会被里面的内容捕获
                    //      推荐异常写在函数外部 generator不对异常做处理
                    function _f41(arr) {
                        return regeneratorRuntime.wrap(function _f41$(_context4) {
                            while (1) {
                                switch (_context4.prev = _context4.next) {
                                    case 0:
                                        _context4.prev = 0;
                                        _context4.next = 3;
                                        return 3;

                                    case 3:
                                        _context4.next = 8;
                                        break;

                                    case 5:
                                        _context4.prev = 5;
                                        _context4.t0 = _context4['catch'](0);

                                        arr.push(_context4.t0);

                                    case 8:
                                        return _context4.abrupt('return', 1);

                                    case 9:
                                    case 'end':
                                        return _context4.stop();
                                }
                            }
                        }, _marked4[0], this, [[0, 5]]);
                    }

                    var f41,
                        result = [];
                    f41 = _f41(result);
                    f41.next();
                    try {
                        f41.throw('inner error');
                        f41.throw('out error');
                    } catch (e) {
                        result.push(e);
                    }
                    return {
                        result: result
                    };
                }

                //测试数组
                function testArr() {
                    var _marked5 = [_f5].map(regeneratorRuntime.mark);

                    function _f5(arr) {
                        return regeneratorRuntime.wrap(function _f5$(_context5) {
                            while (1) {
                                switch (_context5.prev = _context5.next) {
                                    case 0:
                                        return _context5.delegateYield(arr, 't0', 1);

                                    case 1:
                                    case 'end':
                                        return _context5.stop();
                                }
                            }
                        }, _marked5[0], this);
                    }

                    var f51 = _f5([1, 2, 3, 4, 5]),
                        result = [];
                    result.push(f51.next().value);
                    result.push(f51.next().value);
                    result.push(f51.next().value);
                    result.push(f51.next().value);
                    result.push(f51.next().value);
                    return result;
                }

                return {
                    testBase: testBase, testYield: testYield, testParams: testParams, testError: testError, testArr: testArr
                };
            }
        }, {
            key: 'testIterator',
            value: function testIterator() {

                //1. 给

                function testBase() {
                    //设置一个iterator函数
                    var re = [];
                    //这是一个函数 传入一个对象 返回对象的key value

                    var _iterator = function () {
                        function _iterator(obj) {
                            _classCallCheck(this, _iterator);

                            this.keys = Object.keys(obj);
                            this.start = -1;
                            this.obj = obj;
                        }
                        //部署这个借口 这个for of 的时候 调用这个 返回本对象 调用本对象的 next方法进行操作 也可以采用第二种方式  直接 *[Symbol.iterator]() 直接部署generator函数


                        _createClass(_iterator, [{
                            key: Symbol.iterator,
                            value: function value() {
                                return this;
                            }
                        }, {
                            key: 'next',
                            value: function next() {
                                this.start++;
                                if (this.start < this.keys.length) {
                                    return {
                                        done: false,
                                        value: this.obj[this.keys[this.start]]
                                    };
                                } else {
                                    return {
                                        done: true,
                                        value: undefined
                                    };
                                }
                            }
                        }]);

                        return _iterator;
                    }();

                    var _iterator1 = function () {
                        function _iterator1(obj) {
                            _classCallCheck(this, _iterator1);

                            this.keys = Object.keys(obj);
                            this.start = 0;
                            this.obj = obj;
                        }
                        //部署这个借口 这个for of 的时候 调用这个 返回本对象 调用本对象的 next方法进行操作 也可以采用第二种方式  直接 *[Symbol.iterator]() 直接部署generator函数


                        _createClass(_iterator1, [{
                            key: Symbol.iterator,
                            value: regeneratorRuntime.mark(function value() {
                                return regeneratorRuntime.wrap(function value$(_context6) {
                                    while (1) {
                                        switch (_context6.prev = _context6.next) {
                                            case 0:
                                                if (!(this.start < this.keys.length)) {
                                                    _context6.next = 6;
                                                    break;
                                                }

                                                _context6.next = 3;
                                                return this.obj[this.keys[this.start]];

                                            case 3:
                                                this.start++;
                                                _context6.next = 0;
                                                break;

                                            case 6:
                                            case 'end':
                                                return _context6.stop();
                                        }
                                    }
                                }, value, this);
                            })
                        }]);

                        return _iterator1;
                    }();

                    var it = new _iterator({
                        a: 1, b: 2, c: 3
                    });
                    var it1 = new _iterator1({
                        a: 1, b: 2, c: 3
                    });
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator2 = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator2.next()).done); _iteratorNormalCompletion = true) {
                            var result = _step.value;

                            re.push(result);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator3 = it1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator3.next()).done); _iteratorNormalCompletion2 = true) {
                            var _result = _step2.value;

                            re.push(_result);
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    return re;
                }

                function testInject() {
                    //默认的数组已经实现了对应的Symbol.iterator接口
                    var obj = 'ok',
                        result = [],
                        obj1 = {
                        a: 1, b: 2
                    };
                    //设置对象的iterator借口
                    obj1[Symbol.iterator] = function () {
                        var that = this,
                            keys = Object.keys(that),
                            length = keys.length,
                            start = -1;
                        return {
                            next: function next() {
                                //
                                start++;
                                if (start < length) {
                                    return {
                                        done: false,
                                        value: that[keys[start]]
                                    };
                                } else {
                                    return {
                                        done: true,
                                        value: undefined
                                    };
                                }
                            }
                        };
                    };
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator4 = obj[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator4.next()).done); _iteratorNormalCompletion3 = true) {
                            var v = _step3.value;

                            result.push(v);
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator5 = obj1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator5.next()).done); _iteratorNormalCompletion4 = true) {
                            var _v = _step4.value;

                            result.push(_v);
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    return result;
                }
                return {
                    testBase: testBase,
                    testInject: testInject
                };
            }
        }, {
            key: 'testTrunk',
            value: function testTrunk() {
                //1.使用promise进行请求数据
                function testPromise() {
                    //设置 trunk函数
                    //传入 fn函数和参数 需要的时候才执行
                    function _trunk(fn) {
                        //首先返回一个函数为执行 保存对应的状态
                        return function () {
                            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                args[_key] = arguments[_key];
                            }

                            return function (callback) {
                                return fn.call.apply(fn, [this].concat(args, [callback]));
                            };
                        };
                    }
                    //调用

                    var add = _trunk(function (a, b) {
                        return a + b;
                    });
                    return add(3, 5)();
                }

                //测试流程管理
                function testProcess() {
                    var _marked6 = [gen].map(regeneratorRuntime.mark);

                    //首先可以对流程做相应的管理 ->生成 generator函数
                    var result = [];
                    function gen(x) {
                        var y, z;
                        return regeneratorRuntime.wrap(function gen$(_context7) {
                            while (1) {
                                switch (_context7.prev = _context7.next) {
                                    case 0:
                                        _context7.next = 2;
                                        return x * 2;

                                    case 2:
                                        y = _context7.sent;
                                        _context7.next = 5;
                                        return y * y;

                                    case 5:
                                        z = _context7.sent;
                                        return _context7.abrupt('return', z);

                                    case 7:
                                    case 'end':
                                        return _context7.stop();
                                }
                            }
                        }, _marked6[0], this);
                    }

                    function run(fn) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            args[_key2 - 1] = arguments[_key2];
                        }

                        var gen = fn(args);
                        //然后就开始执行函数

                        function next(err, data) {
                            var r = gen.next(data);
                            result.push(r.value);
                            //如果执行完毕 则返回r
                            if (r.done || err) return r;
                            //否则自动执行
                            next(null, r.value);
                        }
                        next();
                    }
                    //执行
                    run(gen, 2);
                    return result;
                }

                return {
                    testPromise: testPromise, testProcess: testProcess
                };
            }
        }, {
            key: 'testAsync',
            value: function testAsync() {
                //对应的Promise对象 通过 Utils取得
                //测试基础用法
                function testBaseAsync() {
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

                function testAutoAsync() {}

                return {
                    testBaseAsync: testBaseAsync, testAutoAsync: testAutoAsync
                };
            }
        }, {
            key: 'testClass',
            value: function testClass() {

                //测试基本的class用法
                //包含构造函数  重写
                function testBaseClass() {

                    var base = new _Base3.default(1, 'Base');
                    return base.toString();
                }

                //测试对应的class是否所有的方法都在prototype中
                function testPrototype() {

                    var keys = Object.keys(_Base3.default.prototype),
                        //发现 keys上并没有对应的值  说明在此原型链上
                    prots = Object.getOwnPropertyNames(_Base3.default.prototype);

                    return {
                        keys: keys, prots: prots
                    };
                }

                //测试es6的prototype  和es5中的prototype的区别
                function testESDeliver() {
                    //首先是基本的es5中的集成
                    //1.定义一个A
                    function A() {
                        this.name = 'A';
                        this.getName = function () {
                            return this.name;
                        };
                    }

                    //定义一个B 继承A
                    //传统的写法
                    function B() {
                        this.name = "B";
                    }

                    B.prototype = new A();
                    B.prototype.constructor = B;

                    //测试第一个
                    var a = new A(),
                        b = new B();
                    //测试es6中的类
                    //1.定义一个基础类
                    //2.集成Base

                    var C = function (_Base) {
                        _inherits(C, _Base);

                        function C() {
                            _classCallCheck(this, C);

                            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(C).call(this));

                            _this.name = 'C';
                            return _this;
                        }

                        _createClass(C, [{
                            key: 'getName',
                            value: function getName() {
                                return this.name;
                            }
                        }]);

                        return C;
                    }(_Base3.default);

                    var base = new _Base3.default(1, 'Base'),
                        c = new C();

                    //测试对应生成对象的constructor
                    var resultES6 = [];
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

                    resultES6.push(C.__proto__ == _Base3.default); // 子类的___proto__指向父对象
                    resultES6.push(c.__proto__ == C.prototype); // c 为实列 c的__proto__ 指向  子类的原型对象
                    resultES6.push(c.__proto__.__proto__ == _Base3.default.prototype); //集成之后的子类C的原型对象的__proto__ 指向父元素 的原型对象
                    return resultES6;
                }

                //测试变量提升

                function testVarUp() {
                    var result = -1;
                    try {
                        var a = new A();

                        var A = function A() {
                            _classCallCheck(this, A);
                        };
                    } catch (e) {
                        result = 0;
                    }

                    return result;
                }

                //测试私有方法
                function testPrivate() {
                    var getName = Symbol('getName');

                    var A = function () {
                        function A() {
                            _classCallCheck(this, A);
                        }

                        _createClass(A, [{
                            key: getName,
                            value: function value(name) {
                                return name;
                            }
                        }]);

                        return A;
                    }();

                    var a = new A(),
                        result = -1;
                    //访问私有方法报错 在内部可以进行调用
                    try {
                        a.getName();
                    } catch (e) {
                        result = 0;
                    }
                    return result;
                }

                //测试继承
                function testExtend() {
                    var A = function () {
                        function A(x, y) {
                            _classCallCheck(this, A);

                            this.x = x;
                            this.y = y;
                        }

                        _createClass(A, [{
                            key: 'add',
                            value: function add() {
                                return this.x + this.y;
                            }
                        }]);

                        return A;
                    }();

                    var B = function (_A) {
                        _inherits(B, _A);

                        function B(x, y) {
                            _classCallCheck(this, B);

                            var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(B).call(this, x, y));

                            _this2.total = x + y;
                            return _this2;
                        }

                        _createClass(B, [{
                            key: 'sum',
                            value: function sum() {
                                return this.total;
                            }
                        }]);

                        return B;
                    }(A);

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

                    var a = new A(1, 2),
                        b = new B(1, 2);

                    return { aSum: a.add(), bSum: b.sum() };
                }
                //测试静态方法
                //静态方式测试出
                function testStatic() {
                    var result = [];

                    var A = function () {
                        function A() {
                            _classCallCheck(this, A);

                            this.proto = 50;
                        }

                        _createClass(A, null, [{
                            key: 'ok',
                            value: function ok() {
                                return 'A';
                            }
                        }]);

                        return A;
                    }();

                    var B = function (_A2) {
                        _inherits(B, _A2);

                        function B(args) {
                            _classCallCheck(this, B);

                            var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(B).call(this, args));

                            _this3.proto = 30;
                            return _this3;
                        }

                        _createClass(B, null, [{
                            key: 'ok1',
                            value: function ok1() {
                                return _get(Object.getPrototypeOf(B), 'ok', this).call(this) + 'B';
                            }
                        }]);

                        return B;
                    }(A);

                    var a = new A(),
                        b = new B();
                    result.push(A.ok()); //调用对应的静态函数
                    result.push(a.proto); //使用es6的新的写法操作this
                    result.push(B.ok()); //
                    result.push(b.proto); //
                    result.push(B.ok1()); //
                    return result;
                }
                return {
                    testBaseClass: testBaseClass, testPrototype: testPrototype, testESDeliver: testESDeliver, testVarUp: testVarUp, testPrivate: testPrivate, testExtend: testExtend, testStatic: testStatic
                };
            }
        }, {
            key: 'testMixIn',
            value: function testMixIn() {
                //把多个class合成到一个class当中
                function mix() {
                    var Mix = function Mix() {
                        _classCallCheck(this, Mix);
                    };

                    for (var _len3 = arguments.length, mixins = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        mixins[_key3] = arguments[_key3];
                    }

                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        //遍历所有的参数 把对应的复制到Mixin中
                        for (var _iterator6 = mixins[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator6.next()).done); _iteratorNormalCompletion5 = true) {
                            var mixin = _step5.value;

                            _copyProperties(Mix, mixin);
                            _copyProperties(Mix.prototype, mixin.prototype);
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator6.return) {
                                _iterator6.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    return Mix;

                    function _copyProperties(target, source) {
                        var _iteratorNormalCompletion6 = true;
                        var _didIteratorError6 = false;
                        var _iteratorError6 = undefined;

                        try {
                            for (var _iterator7 = Reflect.ownKeys(source)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator7.next()).done); _iteratorNormalCompletion6 = true) {
                                var key = _step6.value;

                                if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
                                    var desc = Object.getOwnPropertyDescriptor(source, key);
                                    Object.defineProperty(target, key, desc);
                                }
                            }
                        } catch (err) {
                            _didIteratorError6 = true;
                            _iteratorError6 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion6 && _iterator7.return) {
                                    _iterator7.return();
                                }
                            } finally {
                                if (_didIteratorError6) {
                                    throw _iteratorError6;
                                }
                            }
                        }
                    }
                }

                var A = function () {
                    function A() {
                        _classCallCheck(this, A);
                    }

                    _createClass(A, [{
                        key: 'getA',
                        value: function getA() {
                            return 'A';
                        }
                    }]);

                    return A;
                }();

                var B = function () {
                    function B() {
                        _classCallCheck(this, B);
                    }

                    _createClass(B, [{
                        key: 'getB',
                        value: function getB() {
                            return 'B';
                        }
                    }]);

                    return B;
                }();

                var C = function (_mix) {
                    _inherits(C, _mix);

                    function C() {
                        _classCallCheck(this, C);

                        return _possibleConstructorReturn(this, Object.getPrototypeOf(C).apply(this, arguments));
                    }

                    _createClass(C, [{
                        key: 'getC',
                        value: function getC() {
                            return 'C';
                        }
                    }]);

                    return C;
                }(mix(A, B));

                var result = [];
                var c = new C();
                result.push(c.getA(), c.getB(), c.getC());
                return result;
            }
        }, {
            key: 'testDecorator',
            value: function testDecorator() {}
        }, {
            key: 'testModule',
            value: function testModule() {
                var defaultName = (0, _ExportPile2.default)(),
                    getName = (0, _ExportPile.gName)();

                return {
                    name: _ExportPile.name, age: _ExportPile.age, getName: getName, defaultName: defaultName
                };
            }
        }]);

        return BaseSyntax;
    }();

    exports.default = BaseSyntax;
});