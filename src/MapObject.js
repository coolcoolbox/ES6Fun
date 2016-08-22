/**
 * @params:
 * @module : MapObject
 * @author : cuss
 * @date : 2016-7-14 17:40:55
 * @description : 词典对象
 *
 */
//es6中的map对象 就是键值对的集合
//key是唯一的  当map中没有key的时候 返回undefined
// 其中的weakMap和 weakSet类似

export default  class MapObject{

    //测试map的基本的用法  set delete has
    testBase(){
        let map = new Map([['a',1],['b',2]]);
        let result = [];
        result.push(map.size);

        map.set('c',3);
        result.push(map.has('c'));
        map.delete('c');
        result.push(map.has('c'));
        result.push(map.get('a'));
        result.push(map.size);
        map.clear();
        result.push(map.size);

        return result;
    }

    //测试map的遍历
    testEach(){
        let map = new Map([['a',1],['b',2]]),
            keys = [],
            values = [],
            keyTemp = [],
            valueTemp = [],
            result = [];
        //遍历1
        map.forEach((value,key)=>{
            keys.push(key);
            values.push(value);
        });

        //遍历2
        for(let [key,value] of map){
            keyTemp.push(key);
            valueTemp.push(value);
        }
        result.push(keyTemp.toString() === keys.toString());
        result.push(valueTemp.toString() === values.toString());
        keyTemp = [];
        valueTemp = [];
        //遍历key
        for(let key of map.keys()){
            keyTemp.push(key);
        }
        result.push(keyTemp.toString() === keys.toString());
        //遍历 value
        for(let value of map.values()){
            valueTemp.push(value);
        }
        result.push(valueTemp.toString() === values.toString());
        keyTemp = [];
        valueTemp = [];
        //遍历entry
        for(let item of map.entries()){
            keyTemp.push(item[0]);
            valueTemp.push(item[1]);
        }
        result.push(keyTemp.toString() === keys.toString());
        result.push(valueTemp.toString() === values.toString());
        return result;
    }

}