/**
 * @params:
 * @module : NumberExtend
 * @author : cuss
 * @date : 2016-7-14 17:44:33
 * @description : 数字对象的扩展
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
    global.NumberExtend = mod.exports;
  }
})(this, function () {});