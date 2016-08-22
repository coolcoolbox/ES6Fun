/**
 * @params:
 * @module : SetObject
 * @author : cuss
 * @date : 2016-7-14 17:46:26
 * @description : set对象
 *
 */
//es6引入了set类型 表示一个单一的集合(简单点说就是里面没有重复的值)
//这里的重复值 表示任意两个队的比较 比如 1和1 相等  {} 和 {} 则不相等 ，需要的注意的是 NaN和NaN是相等的
export default class SetObject {

    //测试基本的使用
    testBase(){
        //set里面的重复值只会保存一个重复的值
        var st = new Set([1,2,3,4,4,5,5]);

        let size,content;
        size = st.size;
        content = [...st];

        return {
            size,content
        }
    }
    //测试set API
    //has 判断是否拥有某个对象
    //clear 清楚
    //add 增加
    //Array.from 转换成数组
    //delete 删除某一个对象 如果存在
    testMethod(){
        var st = new Set();
        let size,hased,clearSize,hased1,deleteSize,toArray;

        st.add(1).add(2).add(3).add(3);
        size = st.size;
        hased = st.has(2);
        hased1 = st.has(5);
        toArray = Array.from(st);
        st.delete(3);
        deleteSize = st.size;
        st.clear();
        clearSize = st.size;
        return {
            size,hased,hased1,deleteSize,clearSize,toArray
        }

    }
    //测试遍历
    //keys 返回对应的keys
    // values 返回values
    //由于set没有对应的键值对 所以 keys 和values完全一致 返回遍历器
    //entries 返回键值对  key 和value相等
    //forEach 遍历

    testEach(){
        let st = new Set([1,2,3,4,5]),result1 = [],result2 = [],result3 = [];
        for(let item of st.keys()){
            result1.push(item)
        }

        for(let item of st.entries()){
            result2.push(item[0])
        }

        st.forEach((x,y)=>{
            result3.push(x);
        });

        return {
            result1,result2,result3
        }
    }
    //es6中嗨啊拥有一个weakSet的类型 这个类型只能引用对象，并且该对象被销毁的时候 不会参考weakSet中的引用 即使这个set中的数据也会被删除
    //他拥有对应的  add   has  delete方法   不能进行遍历操作

    testWeakSet(){
        let ws = new WeakSet();
        let o = {x:1},result = [];
        ws.add(o);
        result.push( ws.has(o));
        ws.delete(o);
        result.push( ws.has(o));

        return result;

    }
}