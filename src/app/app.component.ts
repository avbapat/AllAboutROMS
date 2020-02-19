import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    platform.ready().then(() => {
      //statusBar.styleDefault();
      statusBar.styleBlackTranslucent(); //works.
      splashScreen.hide();
  
      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
  
      window["plugins"].OneSignal
        .startInit("c3a4456d-63aa-491b-91bd-ba378b677bbd", "588613350403")
        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification) //For showing notifications in status bar instead of and ALERT Box(Default) 
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      { title: 'Home', component: ListPage },
      
    ];

  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
   
    //     var notificationOpenedCallback = function(jsonData) {
    //       console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    //       alert("NOTIFICATAION TRIGGERED")
    //     };
    
    //     window["plugins"].OneSignal
    //       .startInit("c3a4456d-63aa-491b-91bd-ba378b677bbd", "466896232537")
    //       .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification) //For showing notifications in status bar instead of and ALERT Box(Default) 
    //       .handleNotificationOpened(notificationOpenedCallback)
    //       .endInit();
    //   });
      // this.statusBar.styleLightContent();
      // this.splashScreen.hide();
   
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
