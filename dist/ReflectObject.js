/**
 * @params:
 * @module : ReflectObject
 * @author : cuss
 * @date : 2016-7-14 17:46:01
 * @description : Proxy对象
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
    global.ReflectObject = mod.exports;
  }
})(this, function () {});