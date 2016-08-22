/**
 * Created by cuss on 2016/8/11.
 */
import ReflectObject from '../src/ReflectObject.js';


let reflect ;
beforeEach(function() {
    reflect = new ReflectObject();
});
describe('ES6 ReflectObject Test', function () {

    it('测试Reflect的基本用法', function () {
        let result = reflect.testBase();
        expect({name:'cuss'}).to.deep.equal(result);
    })

    it('测试Reflect的has', function () {
        let result = reflect.testHas();
        expect(true).to.deep.equal(result);
    })

    it('测试Reflect的Get', function () {
        let result = reflect.testGet();
        expect('cuss').to.deep.equal(result);
    })

    it('测试Reflect的Apply', function () {
        let result = reflect.testApply();
        expect('cuss').to.deep.equal(result);
    })
});