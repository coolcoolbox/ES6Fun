/**
 * Created by cuss on 2016/8/8.
 */
import SetObject from '../src/SetObject';

//开始测试
describe('ES6 SetObject Test', function () {

    let setObject = new SetObject();

    it('测试Set的基本使用', function () {
        let result = setObject.testBase();
        expect({
            size:5,
            content:[1,2,3,4,5]
        }).to.deep.equal(result);
    })

    it('测试Set的基本方法', function () {
        let result = setObject.testMethod();
        expect({
            size:3,
            hased:true,
            hased1:false,
            deleteSize:2,
            clearSize:0,
            toArray:[1,2,3]
        }).to.deep.equal(result);
    })
    it('测试Set的遍历', function () {
        let result = setObject.testEach();
        expect({
            result1:[1,2,3,4,5],
            result2:[1,2,3,4,5],
            result3:[1,2,3,4,5]
        }).to.deep.equal(result);
    })

});
