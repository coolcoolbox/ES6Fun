/**
 * @params:
 * @module : FunctionExtend
 * @author : cuss
 * @date : 2016-7-14 17:40:39
 * @description : 函数的扩展
 *
 */

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.FunctionExtend = mod.exports;
  }
})(this, function () {});