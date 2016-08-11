/**
 * Created by cuss on 2016/8/9.
 */

import MapObject from '../src/MapObject'

describe('ES6 MapObject Test', function () {

    let mapObject = new MapObject();
    it('测试MapObject的基础的用法', function () {
        let result = mapObject.testBase();
        expect([2,true,false,1,2,0]).to.deep.equal(result);
    });
    it('测试MapObject的遍历', function () {
        let result = mapObject.testEach();
        expect([true,true,true,true,true,true]).to.deep.equal(result);
    });

});