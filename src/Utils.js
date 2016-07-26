/**
 * Created by cuss on 2016/7/26.
 */
export default class Utils {
    //获取xmlq对象 简易版
    getXMLRequest(options, success,error) {
        let xmlhttprequest,
            distOptions = {
                mimeType: "text/xml", method: "GET", dataType: "json", data: {},
                headers : {
                    json: "application/json, text/javascript"
                }
            };
        //覆盖对应的属性
        Object.assign(distOptions,options);
        if (window.XMLHttpRequest) { //如果支持XMLHttpRequest  则直接返回这个对象
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
                } catch (e) {

                }
            }
        }
        xmlhttprequest.onreadystatechange = function () {
            //设置状态变化
            //判断 xmlhttprequest 的 readyState 4为完成 1为开始未发送 2 为已经发送 3为正在发送
            switch (xmlhttprequest.readyState){
                case 1:{
                    break;
                }
                case 2:{
                    break;
                }
                case 3:{
                    break;
                }
                case 4:{
                    // 不对xml做处理了
                    let  resText = xmlhttprequest.responseText;
                    //判断对应的status
                    if(xmlhttprequest.status == 200 || xmlhttprequest.status < 400){
                        //success    //redirect or some methods
                        if(success){

                            success(JSON.parse(resText + ''),xmlhttprequest.status)
                        }
                    }else if(xmlhttprequest.status < 500 || xmlhttprequest.status>=500){
                        //error
                        if(error){
                            error(resText,xmlhttprequest.status)
                        }
                    }

                    break;
                }
            }
        };

        xmlhttprequest.open(distOptions.method,distOptions.url,true);
        xmlhttprequest.send(distOptions.data);
        return xmlhttprequest;
    }

}