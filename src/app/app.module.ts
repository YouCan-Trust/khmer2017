import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
/* tslint:disable */
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
/* tslint:enable */

import { MyApp } from './app.component';
import { SettingPage } from '../pages/menu/menu';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'aefa9984'
  }
};
@NgModule({
  declarations: [
    MyApp,
    SettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      pageTransition: 'ios-transition'
    }),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
