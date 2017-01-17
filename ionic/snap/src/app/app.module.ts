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


import { HelpPage } from '../pages/help/help';



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
    HelpPage
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
    HelpPage
  ],
  providers: [IonicService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
