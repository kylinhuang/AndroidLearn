1 边框
class HelloReactNative extends Component {
  render() {
    return (
      <View style = {styles.container}></View>
    );
  }
}


let styles = StyleSheet.create({
  container:{
    backgroundColor: '#eae7ff',
    flex: 1,
    margin: 30 ,
    borderWidth: 1 , //边框宽度
    borderColor: '#6435c9' ,
    borderRadius : 20 , //边框圆角
    shadowColor : '#6435c9', //阴影颜色
    shadowOpacity : 0.6 , //阴影不透明度 0-1 之间
    shadowRadius: 2 , //阴影扩散
    shadowOffset :{ //阴影 偏移
      height : 5  ,
      width: 1
    },

  }
});

2 TextView
class HelloReactNative extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>kylinhuang</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({

  title:{
    fontSize: 26 ,
    color: '#6435c9',
    textAlign:'center' , //文字对齐方式
    fontStyle:'italic' , //文字样式
    letterSpacing:2,    //字间距
    lineHeight:33 ,     //行间距
    fontFamily:'Helvetica Neue' , //字体
    fontWeight:'bold' , //900 -100
    textDecorationLine:'line-through',//line-through 删除线
    // underline 下划线

    textDecorationStyle:'solid' //solid 实线  double 双实线 dotted 点线 dashed虚线
  },
  .......
  });
