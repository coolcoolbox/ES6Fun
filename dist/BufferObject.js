/**
 * @params:
 * @module : BufferObject
 * @author : cuss
 * @date : 2016-7-14 17:40:18
 * @description : 二进制对象
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
    global.BufferObject = mod.exports;
  }
})(this, function () {});