/**
 * @params:
 * @module : CompileBug
 * @author : cuss
 * @date : 2016-7-14 17:49:14
 * @description : 编译缺陷/编译bug
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
    global.CompileBug = mod.exports;
  }
})(this, function () {});