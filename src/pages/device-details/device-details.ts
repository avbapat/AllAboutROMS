import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeviceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-details',
  templateUrl: 'device-details.html',
})
export class DeviceDetailsPage {

  deviceDetails: string;
  romList: any =[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams)

    this.deviceDetails = navParams.data;

    this.getromList();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceDetailsPage');
  }

  getromList(){
    this.romList = [ 
      {   "id":1,"ROMName": "Pixel Experience ROM", "Dev": "JHenrique","totalDownloads":"324234","buildDate": "15022020","romLink":"https://download.pixelexperience.org/whyred","romImg":"https://img.xda-cdn.com/MOzKgPvLPaWB_b4AbFukRos8nB8=/https%3A%2F%2Fi.imgur.com%2FGtwTyCR.png","tg":"https://t.me/pixelexperiencechat"},
      {   "id":2,"ROMName": "Havoc OS ROM", "Dev": "skulshady, zenixxx","totalDownloads":"245","buildDate": "18022020","romLink": "https://sourceforge.net/projects/havoc-os/files/whyred/","romImg":"https://a.fsdn.com/allura/p/havoc-os/icon?1571838574?&w=135","tg":"https://t.me/Havoc_OS"},
      {   "id":3,"ROMName": "SuperiorOS ROM", "Dev": "advertpavan, darkstar085, jayant-deshmukh, pshreejoy15, swapnilsoni1999","totalDownloads":"245","buildDate": "18022020","romLink": "https://sourceforge.net/projects/superioros/files/whyred/","romImg":"https://a.fsdn.com/allura/p/superioros/icon?1581853868?&w=135","tg":"https://t.me/superioros"},
      {   "id":4,"ROMName": "ColtOS ROM", "Dev": "bond1987, coltos","totalDownloads":"245","buildDate": "18022020","romLink": "https://sourceforge.net/projects/coltos/files/Whyred/","romImg":"https://a.fsdn.com/allura/p/coltos/icon?1581341017?&w=135","tg":"https://t.me/ColtOSOfficial"},
      {   "id":5,"ROMName": "OOS ROM", "Dev": "Guzram","totalDownloads":"245","buildDate": "18022020","romLink": "https://www.pling.com/p/1316269/startdownload?file_id=1570300724&file_name=open-20191005183010&file_type=text/html;%20charset=utf-8&file_size=0","romImg":"https://cdn5.telesco.pe/file/YI7MCJrHbaK-xxc9pKcQGvSr8YZkjaZZ433pEsZvIPwiETIzQGAWEL39oNIbhzMo5Bco8Y9be7YH4OtJKBwhbTwuzRaBscwt4Egu4A67VFdUCUED-Y5nY5uToZSdvVfJPO1MsXR7dR5sxcMLRIrbO6TknPb1uUqe-ulLvhT66N3mx6_EGbi5olVeoBkF0-MGPmWc7GDqFeorBBw0WebXWnljZ05Z72a4r3bi9uKC7S08VHs2SmD-rocUipLw-hlRv3_xgn_tstsXw1kgpv4OQvVPcKFn2_Ft01LKNjpvWT3zkVp_re_rMUM3xfkgD14OPYZiG6iBBkueqpJKtdVSlQ.jpg","tg":"https://t.me/WhyredOOS"}
    ];
  }

}
