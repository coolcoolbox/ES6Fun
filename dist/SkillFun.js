/**
 * @params:
 * @module : SkillFun
 * @author : cuss
 * @date : 2016-7-14 17:48:26
 * @description : 函数技巧
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
    global.SkillFun = mod.exports;
  }
})(this, function () {});