
React Native 的ES5 ES6写法对照表
=====

模块 引用
===
在ES5里，如果使用CommonJS标准，引入React包基本通过require进行，代码类似这样：


    //ES5
    var ReactNative = require("react-native");
    var {
      Image,
      Text,
    } = ReactNative;  //引用具体的React Native组件

    在ES6里，import写法更为标准
    //ES6
    import {
      Image,
      Text
    } from 'react-native'
注意在React Native里，import直到0.12+才能正常运作。


导出单个类
===
在ES5里，要导出一个类给别的模块用，一般通过module.exports来导出


    //ES5
    var MyComponent = React.createClass({
      ...
    });
    module.exports = MyComponent;
在ES6里，通常用export default来实现相同的功能：

    //ES6
    export default class MyComponent extends Component{
      ...
    }
引用的时候也类似：

    //ES5
    var MyComponent = require('./MyComponent');

    //ES6
    import MyComponent from './MyComponent';













//ES6
import MyComponent from './MyComponent';
