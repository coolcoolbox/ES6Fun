/**
 * @params:
 * @module : StingExtend
 * @author : cuss
 * @date : 2016-7-14 17:46:50
 * @description : 字符串的扩展
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
    global.StingExtend = mod.exports;
  }
})(this, function () {});