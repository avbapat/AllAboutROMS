import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceDetailsPage } from '../device-details/device-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  deviceList: any[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.deviceList = [ 
    {   "id":1,"DeviceName": "Redmi Note 5 Pro (WHYRED)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"12", "imgURL": "https://global.appmifile.com/webfile/globalimg/in/cms/78986F32-B186-1319-AA4A-0F54E7E6CA59.jpg" },
    {   "id":2,"DeviceName": "Redmi K20Pro (RAPHAEL)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/D05AB2D9-6A4E-0BE2-8B61-C2CC55B9B1C2.jpg" },
    {   "id":3,"DeviceName": "Redmi Note 8 (GINKGO)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"2", "imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/58F356D1-538B-E4C7-0D9E-5266A9306F8E.jpg" },
    {   "id":4,"DeviceName": "Redmi Note 4 (MIDO)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://rukminim1.flixcart.com/image/416/416/mobile/f/d/5/mi-redmi-note-4-na-original-imaeqdxqcrfshtqu.jpeg?q=70" },
    {   "id":5,"DeviceName": "Redmi K20 (DAVINCI)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"4", "imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/D05AB2D9-6A4E-0BE2-8B61-C2CC55B9B1C2.jpg" },
    // {   "id":6,"DeviceName": "Redmi Note 6 (TULIP)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://www.91-img.com/pictures/129556-v10-xiaomi-redmi-note-6-pro-mobile-phone-large-1.jpg" },
    {   "id":7,"DeviceName": "Redmi Note 7 (LAVENDER)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"1", "imgURL": "https://download.appmifile.com/933_updatepdf_in/28/02/2019/8b118dd0-dd89-4b5d-9edc-032157e3dcd9.png" },
    {   "id":8,"DeviceName": "Redmi Note 7 Pro (VIOLET)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/C242F83B-6939-035E-6201-F7F739B24211.jpg" },
    {   "id":9,"DeviceName": "Poco F1 (BERYLLIUM)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"8", "imgURL": "https://global.appmifile.com/webfile/globalimg/in/cms/78986F32-B186-1319-AA4A-0F54E7E6CA59.jpg" },
    // {   "id":10,"DeviceName": "Redmi Note 3 (KENZO)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://i01.appmifile.com/v1/MI_25943454643F6/T12x_jB_xT1RXrhCrK.jpg" },
    {   "id":11,"DeviceName": "Mi A2 (JASMINE)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"4", "imgURL": "https://global.appmifile.com/webfile/globalimg/samantha/A2_800x800_black.png" },
    {   "id":12,"DeviceName": "Mi A3 (LAUREL)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"4","imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/E10CC004-1FDD-F63D-E83F-A02872319A0E.jpg" },
    // {   "id":13,"DeviceName": "Redmi Note 5 Pro (WHYRED)", "Mfg": "Xiaomi","launchDate":"March 2018","noOfRoms":"12", "imgURL": "https://global.appmifile.com/webfile/globalimg/in/cms/78986F32-B186-1319-AA4A-0F54E7E6CA59.jpg" },
    // {   "id":14,"DeviceName": "Redmi K20Pro (RAPHAEL)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/726C6F49-9E52-3576-132C-76F9D2E08D25.jpg" }
    // {   "id":14,"DeviceName": "Redmi K20Pro (RAPHAEL)", "Mfg": "Xiaomi", "launchDate":"Sep 2019","noOfRoms":"5","imgURL": "https://i01.appmifile.com/webfile/globalimg/in/cms/726C6F49-9E52-3576-132C-76F9D2E08D25.jpg" }

  ];



  

    this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  navigateToDetails(device){
    console.log(device);

    this.navCtrl.push(DeviceDetailsPage,device)

  }

}
