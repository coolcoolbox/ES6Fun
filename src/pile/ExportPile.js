/**
 * @params:
 * @module : ExportPile
 * @author : cuss
 * @date : 2016-8-2 18:14:53
 * @description : export桩程序
 *
 *
 */

let name = 'cuss',
    age = 10;
function  getName(){
    return 'zh';
}

//导出属性
export {
    name,
    age ,
    getName as gName    //设置别名
}
//设置默认值
export  default function () {
    return 'name:' + name + ';age:' + age;
}