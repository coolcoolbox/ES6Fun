/**
 * Created by cuss on 2016/9/10.
 */
import StringExtend from '../src/StingExtend';

//开始测试
describe('ES6 StringExtend Test', function () {

    let sEx = new StringExtend();

    it('测试es6中Sting对于中文大于0xffff编码', function () {
        let result = sEx.testCode();
        expect([134071,97,134071,97]).to.deep.equal(result);
    })

    it('测试es6中Sting对于大于0xffff编码的转换', function () {
        let result = sEx.testCodeFrom();
        expect('𠮷').to.equal(result);
    })

    it('测试es6中Sting的方法', function () {
        let result = sEx.testMethod();
        expect([true,true,true]).to.equal.equal(result);
    })
});
