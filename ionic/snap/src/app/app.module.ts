import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { IonicService } from '../services/requset/IonicService';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { Menu } from '../pages/menu/Menu';


//CameraPage
import { CameraPage } from '../pages/camera/camera';
import { MySnapPage } from '../pages/camera/mysnap/mysnap';
import { SecurityPage } from '../pages/camera/security/security';
import { DiscoverPage } from '../pages/camera/discover/discover';

//LightingPage
import { LightingPage } from '../pages/lighting/lighting';

//HelpPage
import { HelpPage } from '../pages/help/help';


import { AccountPage } from '../pages/account/account';


import { DevicesManagementPage } from '../pages/devicesmanagement/devicesmanagement';




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Menu,

    HelpPage,

    AccountPage,

    LightingPage,

    DevicesManagementPage,

    CameraPage,
    MySnapPage,
    SecurityPage,
    DiscoverPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    Menu,

    HelpPage,

    AccountPage,


    LightingPage,

    DevicesManagementPage,

    CameraPage,
    MySnapPage,
    SecurityPage,
    DiscoverPage,


  ],
  providers: [IonicService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
