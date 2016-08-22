/**
 * @params:
 * @module : RegexExtend
 * @author : cuss
 * @date : 2016-7-14 17:46:26
 * @description : 正则表达式的扩展
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
    global.RegexExtend = mod.exports;
  }
})(this, function () {});