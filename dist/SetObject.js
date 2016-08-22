/**
 * @params:
 * @module : SetObject
 * @author : cuss
 * @date : 2016-7-14 17:46:26
 * @description : set对象
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
    global.SetObject = mod.exports;
  }
})(this, function () {});