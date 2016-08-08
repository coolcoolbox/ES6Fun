/**
 * @params:
 * @module : MapObject
 * @author : cuss
 * @date : 2016-7-14 17:40:55
 * @description : 词典对象
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
    global.MapObject = mod.exports;
  }
})(this, function () {});