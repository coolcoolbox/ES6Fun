(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.Utils = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Utils = function () {
        function Utils() {
            _classCallCheck(this, Utils);
        }

        _createClass(Utils, [{
            key: "getXMLRequest",
            value: function getXMLRequest(options, success, error) {
                var xmlhttprequest = void 0,
                    distOptions = {
                    mimeType: "text/xml", method: "GET", dataType: "json", data: {},
                    headers: {
                        json: "application/json, text/javascript"
                    }
                };
                //覆盖对应的属性
                Object.assign(distOptions, options);
                if (window.XMLHttpRequest) {
                    //如果支持XMLHttpRequest  则直接返回这个对象
                    xmlhttprequest = new XMLHttpRequest();
                    if (xmlhttprequest.overrideMimeType) {
                        xmlhttprequest.overrideMimeType(distOptions.mimeType);
                    }
                } else if (window.ActiveXObject) {
                    var activeName = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
                    for (var i = 0; i < activeName.length; i++) {
                        try {
                            xmlhttprequest = new ActiveXObject(activeName[i]);
                            break;
                        } catch (e) {}
                    }
                }
                xmlhttprequest.onreadystatechange = function () {
                    //设置状态变化
                    //判断 xmlhttprequest 的 readyState 4为完成 1为开始未发送 2 为已经发送 3为正在发送
                    switch (xmlhttprequest.readyState) {
                        case 1:
                            {
                                break;
                            }
                        case 2:
                            {
                                break;
                            }
                        case 3:
                            {
                                break;
                            }
                        case 4:
                            {
                                // 不对xml做处理了
                                var resText = xmlhttprequest.responseText;
                                //判断对应的status
                                if (xmlhttprequest.status == 200 || xmlhttprequest.status < 400) {
                                    //success    //redirect or some methods
                                    if (success) {

                                        success(JSON.parse(resText + ''), xmlhttprequest.status);
                                    }
                                } else if (xmlhttprequest.status < 500 || xmlhttprequest.status >= 500) {
                                    //error
                                    if (error) {
                                        error(resText, xmlhttprequest.status);
                                    }
                                }

                                break;
                            }
                    }
                };

                xmlhttprequest.open(distOptions.method, distOptions.url, true);
                xmlhttprequest.send(distOptions.data);
                return xmlhttprequest;
            }
        }]);

        return Utils;
    }();

    exports.default = Utils;
});