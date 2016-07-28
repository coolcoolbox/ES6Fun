/**
 * @params:{id:number,name:string}
 * @module : User
 * @author : cuss
 * @date : 2016-7-27 17:51:29
 * @description : User 类型
 *
 *
 */
export default  class User{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    toString(){
        return 'User ' + this.name;
    }
}