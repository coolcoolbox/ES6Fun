/**
 * @params:
 * @module : ProxyObject
 * @author : cuss
 * @date : 2016-7-14 17:45:46
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
    global.ProxyObject = mod.exports;
  }
})(this, function () {});