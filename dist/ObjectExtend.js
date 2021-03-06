/**
 * @params:
 * @module : ObjectExtend
 * @author : cuss
 * @date : 2016-7-14 17:45:21
 * @description : 对象的扩展
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
    global.ObjectExtend = mod.exports;
  }
})(this, function () {});