/**
 * Created by 45068 on 2016/8/3.
 */

import Utils from '../src/Utils';
import SymbolObject from '../src/SymbolObject';



//测试promise对象
describe('ES6 SymbolObject Test', function () {
    let symbolObject = new SymbolObject(),
        utils = new Utils();

    it('测试Symbol的基础特性', function () {
        let result =  symbolObject.testBase();
        expect(result).to.deep.equal({
            smEqual:false,
            strEqual:false
        });
    });

    it('测试Symbol的作为属性名', function () {
        let result =  symbolObject.testAttribute();
        expect(result).to.deep.equal({
            symbolName:'symbolName',
            attributeName:'attributeName'
        });
    });

    it('测试Symbol处理私有方法', function () {
        let result =  symbolObject.testFunc();
        expect(result).to.deep.equal([
            ['name'],['name'],'Symbol(func1)'
        ])
    });
});