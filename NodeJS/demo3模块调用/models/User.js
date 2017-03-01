/**
 * Created by kylinhuang on 01/03/2017.
 */
function  User(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;

    this.enter=function(){
        console.log("进入图书馆");
    }
}
module.exports    =    User;