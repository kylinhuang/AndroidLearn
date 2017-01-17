/**
 * Created by kylinhuang on 17/01/2017.
 */

import {  MenuController, NavController } from 'ionic-angular';

import { Component } from '@angular/core';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';

import { HelpPage } from '../help/help';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class Menu {


  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, img: string, component: any}>;

  constructor(  public navCtrl : NavController,
                public menu: MenuController) {

    // set our app's pages

    this.pages = [
      { title: 'Camera',    img: "assets/img/icon_camera_checked.png" , component: HelloIonicPage },
      { title: 'Lighting',  img: "assets/img/icon_lighting_checked.png" , component: ListPage },
      { title: 'DevicesManagement', img: "assets/img/icon_management_checked.png" , component: HelloIonicPage },
      { title: 'Account',   img: "assets/img/icon_account_checked.png" , component: HelloIonicPage },
      { title: 'About',     img: "assets/img/icon_about_checked.png" , component: HelloIonicPage },
      { title: 'Help',      img: "assets/img/icon_help_checked.png" , component: HelpPage }
    ];
  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(page.component);
  }
}
