import { Component } from '@angular/core';
import { Platform ,MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { LoginPage } from '../pages/login/login';

import { IonicService } from '../services/requset/IonicService';


import {Toast} from 'ionic-native';


@Component({
  templateUrl: 'app.html',

  providers: [IonicService]
})
export class MyApp {
  // rootPage = TabsPage;
  rootPage = LoginPage;


  constructor(public platform: Platform,
              public ionicService: IonicService,
              public menu: MenuController
) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
