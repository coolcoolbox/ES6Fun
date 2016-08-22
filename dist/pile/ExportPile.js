(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.ExportPile = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    exports.default = function () {
        return 'name:' + name + ';age:' + age;
    };

    /**
     * @params:
     * @module : ExportPile
     * @author : cuss
     * @date : 2016-8-2 18:14:53
     * @description : export桩程序
     *
     *
     */

    var name = 'cuss',
        age = 10;
    function getName() {
        return 'zh';
    }

    //导出属性
    exports.name = name;
    exports.age = age;
    exports.gName = getName;
});