/**
 * @params:
 * @module : StingExtend
 * @author : cuss
 * @date : 2016-7-14 17:46:50
 * @description : 字符串的扩展
 *
 */

//开始测试字符串的扩展
//  es6字符串修改了utf编码的错误(超过0xffff)不能正常表示 在超出部分 使用 \u{keyCode} 进行显示
//      对于查看某个编码 可以采用codePointAt 来查看编码 能对四个字符的友好的显示出来
//      此时的编码长度依然为3 如果想要遍历其中的字符串 可以使用 for  of 把对应的遍历出来 不会出现断开的现象
//      对字符串的合并 es6中对字符对象 Sting 扩展了 fromCodePoint()方法 可以把多个合成一个字符串返回
//
export default class StringExtend {

    //todo  测试codePoint
    testCode(){
        let s = '𠮷a';
        //测试大于 0xffff 的utf编码
        // js会把大于oxffff的的utf编码当做长度为2个 因为他保存的是utf16 需要两个来进行保存
        //这个时候按照传统的来遍历的话会出现问题 即使第二个编码不完成
        //es6中出现了 charPointAt() 方法可以显示出字符的编码
        let result = [];
        result.push(s.codePointAt(0));//返回对应的十进制编码 这里的规则是如果后面的是属于前面的一个 则返回当前的和后面的结果
        result.push(s.charCodeAt(2));//返回对应的十进制编码
        //可以对字符进行遍历 获取其中的code
        //采用let of 进行遍历
        for(let ch of s){
            result.push(ch.codePointAt(0));
        }
        return result;
    }
    //测试code  从 utf转成字符
    testCodeFrom(){
        let s = 0x20BB7;
        return String.fromCodePoint(s);
    }
    //测试字符串的方法 endsWith startsWidth includes 后面可以跟个参数表示起始位置
    testMethod(){
        let s = 'hello world!';
        let result = [];
        result.push(s.startsWith('hello'));
        result.push(s.endsWith('!'));
        result.push(s.includes('e'));
        return result;
    }
    //测试es6中的模版
    //es6中的模版使用反引号`` 进行操作
    testStringTemplate(){
        let obj = {
            name:'zuohang',
            age:'25'
        };
        let str = `Name is $(obj.name) .age is $(obj.age) `;
        return str;
    }
}