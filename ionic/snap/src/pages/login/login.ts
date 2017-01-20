
'use strict';
import {Component} from "@angular/core";

import { NavController,LoadingController } from 'ionic-angular';

import { IonicService } from '../../services/requset/IonicService';

import { BaseRequset } from '../../services/requset/BaseRequset';


import { TabsPage } from '../tabs/tabs';



import { Menu } from '../menu/Menu';

import {Toast} from 'ionic-native';



@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers: [IonicService]
})
export class LoginPage {


  login: {username?: string, password?: string} = {
    username: "hwz@sengled.com",
    password: "123456"
  };

  loginErr:{isShow?:boolean,message?:string} = {
    isShow:false,
    message:""
  };

  constructor( public navCtrl : NavController,
               public ionicService : IonicService,
               public loadingCtrl: LoadingController
  ) {

  }

  public jumpSnapHome(){



  }

  onLoginBtnClick(){

      let dialog = this.loadingCtrl.create({
        content: 'Please wait...',
        // duration: 3000,
        dismissOnPageChange: false
      });
    dialog.present();

    let requset = new BaseRequset();
    requset.name = "login";
    requset.url = "/camera/v1/customer/login.json" ;
    requset.requseBodyJson = {"user":"hwz@sengled.com","pwd":"123456","os_type":"android","uuid":"230a00969adc238b"};

    requset.callback = (error, responseJson)=> {

//       {
//       \"messageCode\":\"200\",
// \"info\":\"OK\",
// \"description\":\"正常\",
//
// \"jsessionid\":\"BB7990E975BB98D970E62C48E0F0A567\",\
// "nick_name\":\"hwz@sengled.com\",\
// "profile_path\":\"http://101.68.222.219:9528/profile/origin.png\",
// \"appServerAddr\":null,\"ucenterAddr\":null,\"snapServiceMinVerison\":0,\"ifCheckSessionid\":0}"

      var jsonStr = JSON.parse(responseJson);
      if (null != jsonStr  && null != jsonStr.messageCode && 200 == jsonStr.messageCode ){
        //登陆成功
        // TODO   --- jsessionid 保存 本地
        // jsonStr.jsessionid;
        // this.navCtrl.setRoot(TabsPage);
        dialog.dismissAll();
        this.navCtrl.setRoot(Menu);
      } else {
        dialog.dismissAll();
        Toast.showShortBottom("登陆失败").subscribe(
          toast => {
            console.log(toast);
          }
        );

      }
    };
    this.ionicService.send(requset);


    // this.ionicService.send(requset).subscribe(
    //   data=> {
    //
    //     console.log("data： "  + data);
    //
    //     // console.log("appServerAddr "  + data.appServerAddr);
    //
    //
    //     // User.loginname = data.loginname;
    //     // User.avatar_url = data.avatar_url;
    //     // this.local.set('User', JSON.stringify(User));
    //     // this.nav.push(AccountPage).then(()=> {
    //     //   let index = this.viewCtrl.index;
    //     //   this.nav.remove(index);
    //     // });
    //   });
    // this.mHttpManager.get("http://php.weather.sina.com.cn/xml.php?city=%B1%B1%BE%A9&password=DJOYnieT8234jlsK&day=0").subscribe((data: any) => {
    //   console.log(data);
    //   alert(data);
    //
    // });

  }

  ontest(){
    var req = {
      method: 'POST',
      url: 'http://example.com',
      headers: {
        'Content-Type': "application/json"
      },
      data: { test: 'test' }
    }

    // $http(req).then(function(){...}, function(){...});

    // this.ionicService.send();
    this.ionicService.postUserLogin().subscribe(
      data=> {

        console.log("data "  + data);
        // User.loginname = data.loginname;
        // User.avatar_url = data.avatar_url;
        // this.local.set('User', JSON.stringify(User));
        // this.nav.push(AccountPage).then(()=> {
        //   let index = this.viewCtrl.index;
        //   this.nav.remove(index);
        // });
      });

  }



}




