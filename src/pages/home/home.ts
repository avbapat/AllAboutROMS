import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model:any;
  deviceID:any;
  version: any;
  constructor(public navCtrl: NavController,public platform: Platform) {

  }

}
