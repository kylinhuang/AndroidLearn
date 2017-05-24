/**
 * Created by kylinhuang on 04/03/2017.
 *
 * ES5    ES6(ES2015)
 * 后来改为年代命名
 *
 *
 * ES 新特效
 *
 */


/**
 * 1 块作用域
 */

if(true){
    var fruit = 'apple';
    let fruit1 = 'apple';

    //let 只能用于 定义它的块中
}
console.log(fruit);
console.log(fruit1);


/**
 *  2   恒量 const 不能再次声明 修改 final
 *  但是数组 里面的内容可以改变
 *
 */
const fruit = 'apple';
// const fruit = 'banana'; //error


/**
 * 3    解构数组-Array Destructuring
 */

function breakfast() {
    return ['apple','banana'];
}

let [mark,checket] = breakfast();

//等价于
var tmp = breakfast();
mark  = tmp[0],  checket = tmp[1];


