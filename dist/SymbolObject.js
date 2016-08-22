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
        global.SymbolObject = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
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

    var SymbolObject = function () {
        function SymbolObject() {
            _classCallCheck(this, SymbolObject);
        }

        _createClass(SymbolObject, [{
            key: 'testBase',
            value: function testBase() {
                var sm1 = Symbol(),
                    sm2 = Symbol(),
                    sm3 = Symbol('hello'),
                    sm4 = Symbol('hello');

                return {
                    smEqual: sm1 === sm2,
                    strEqual: sm3 === sm4
                };
            }
        }, {
            key: 'testAttribute',
            value: function testAttribute() {
                var getName = Symbol('getName');

                var obj = _defineProperty({}, getName, function () {
                    return 'symbolName';
                });
                obj.getName = function () {
                    return 'attributeName';
                };
                return {
                    symbolName: obj[getName](),
                    attributeName: obj.getName()
                };
            }
        }, {
            key: 'testFunc',
            value: function testFunc() {
                var func1 = Symbol('func1');

                var A = function () {
                    function A() {
                        _classCallCheck(this, A);

                        this.name = 'A';
                    }

                    _createClass(A, [{
                        key: func1,
                        value: function value() {
                            return 'func1';
                        }
                    }, {
                        key: 'func',
                        value: function func() {
                            return this[func1]();
                        }
                    }]);

                    return A;
                }();

                var a = new A();
                //查看对应的属性
                var result = [];
                result.push(Object.keys(a)); //name
                result.push(Object.getOwnPropertyNames(a)); //name
                result.push(Object.getOwnPropertySymbols(Object.getPrototypeOf(a))[0].toString()); //[Symbol(func1)]
                return result;
            }
        }]);

        return SymbolObject;
    }();

    exports.default = SymbolObject;
});