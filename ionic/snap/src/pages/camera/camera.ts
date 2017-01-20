/**
 * Created by kylinhuang on 18/01/2017.
 */
import { Component,ViewChild } from '@angular/core';

import { NavController, LoadingController, Tabs, Tab, Events} from 'ionic-angular';

import { MySnapPage } from '../camera/mysnap/mysnap';
import { SecurityPage } from '../camera/security/security';
import { DiscoverPage } from '../camera/discover/discover';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

  page :{tabss:any} ={
    tabss : MySnapPage
  }


  tab1Root: any = MySnapPage;
  tab2Root: any = SecurityPage;
  tab3Root: any = DiscoverPage;

  mySelectedIndex: number = 0;

  tab1Icon: string = "tab1iconSelected";
  tab2Icon: string = "tab2icon";
  tab3Icon: string = "tab3icon";


  @ViewChild('myTabs') myTabs: Tabs;
  constructor( ) {


  }

  tabSelected(selectedIndex: number) :void
  {
    // this.myTabs._selectHistory.splice(0,this.myTabs._selectHistory.length);
    // this.myTabs.previousTab(true);

    console.log("selectedIndex :"+ selectedIndex);
    this.tab1Icon = "tab1icon";
    this.tab2Icon = "tab2icon";
    this.tab3Icon = "tab3icon";
    //const index = this.navCtrl.getActive().index;
    // this.navCtrl.remove(0, 1);
    //console.log("******************************************"+index);
    switch(selectedIndex)
    {
      case 1:
        this.tab1Icon = "tab1iconSelected";
        break;
      case 2:
        this.tab2Icon = "tab2iconSelected";
        break;
      case 3:
        this.tab3Icon = "tab3iconSelected";
        break;
      default:
    }
  }
}
