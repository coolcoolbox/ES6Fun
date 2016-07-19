/**
 * Created by cuss on 2016/7/19.
 */
import BaseSyntax from '../src/BaseSyntax'
// BaseSyntax test
describe('ES6 BaseSyntax Test', function() {
    let bs = new BaseSyntax();
    it('测试快级变量let,应该返回一个数组["let var error","let var error"]', function() {
        var result = bs.testScope(),obj = ["let var error","let var error"];
        expect(obj).to.deep.equal(result);

    });
    it('测试const,返回一个字符串"const error"', function() {
        var result = bs.testChangeCOnst();
        assert.equal('const error', result );
    });

    it('测试字符串解析,返回一个对象{a:1,b:2,v:3,a11:1,b11:2,v11:3,q:-1,w:2,e:3,r:2,t:3,y:{h:"hello"},u:1,i:2,o:3,p:2}', function() {
        var result = bs.testStringAnalysis(),
            obj = {a:1,b:2,v:3,a11:1,b11:2,v11:3,q:-1,w:2,e:3,r:2,t:3,y:{h:"hello"},u:1,i:2,o:3,p:2};
        expect(obj).to.deep.equal(result);
    });

    it('测试数组解析,返回一个对象{a:1,b:2,c:3,q:1,w:2,e:3,r:[4,5,6],t:1,y:3,u:3,i:2,o:1,p:2}', function() {
        var result = bs.testArrayAnalysis(),
            obj = {a:1,b:2,c:3,q:1,w:2,e:3,r:[4,5,6],t:1,y:3,u:3,i:2,o:1,p:2};
        expect(obj).to.deep.equal(result);
    });

    it('测试generator语法,返回generator执行的结果', function() {
        var methods = bs.testGenerator(),
            obj = [{value: "hello", done: false},{value: "world", done: false},{value: "ending", done: true},{value: undefined, done: true}];
        expect(obj).to.deep.equal(methods._testYield());
        expect(4).not.equal(methods._testBase());
    });
});
