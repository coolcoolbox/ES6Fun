/**
 * Created by cuss on 2016/8/11.
 */
import ProxyObject from '../src/ProxyObject.js';

let proxyObject;
beforeEach(function() {
    proxyObject = new ProxyObject();
});
describe('ES6 ProxyObject Test', function () {
    //开始测试基本的语法使用
    it('测试ProxyObject的set和get', function () {
        let result = proxyObject.testBase();
        expect(result).to.deep.equal([25,'cuss',26]);
    })

    it('测试ProxyObject的apply', function () {
        let result = proxyObject.testApply();
        expect(result).to.deep.equal({name:'a',age:25});
    })

    it('测试ProxyObject的construct', function () {
        let result = proxyObject.testConstructor();
        expect(result).to.deep.equal({name:'a',age:24});
    })

    it('测试ProxyObject的has', function () {
        let result = proxyObject.testHas();
        expect(result).to.deep.equal([1,2,3,5,6]);
    })
});