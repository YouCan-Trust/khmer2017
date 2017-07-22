import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [DataService,NativePageTransitions]
})
export class Menu {

  Details: any[] =
      [{
          list: {},
          details: {
              content: {}
          }
      }];
  index:number = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dataService: DataService,
    public popoverCtrl: PopoverController,
    private nativePageTransitions: NativePageTransitions) {

    this.index = this.navParams.get('index');

    this.dataService.getListDetails()
      .subscribe((response)=> {
          this.Details = response
      });
  }

  closeMenu() {
    this.navCtrl.setRoot('HomePage');
  }

  gotoSlide(idx) {
    this.navCtrl.setRoot('HomePage', {
      index: idx
    });
  }

  showSettings() {
    let popover = this.popoverCtrl.create(SettingPage);
    popover.present();
  }

  ionViewWillLeave() {
    let options: NativeTransitionOptions = {
       direction: 'right',
       duration: 500,
       slowdownfactor: 3,
       slidePixels: 20,
       iosdelay: 100,
       androiddelay: 150,
       fixedPixelsTop: 0,
       fixedPixelsBottom: 60
    };

    this.nativePageTransitions.flip(options);
  }

}

@Component({
  selector: 'page-setting',
  template: `
<ion-content no-scroll>
  <ion-list padding-top text-wrap>
    <ion-item>
      <ion-label>Play Store Abo Activ</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Login Club-Mitglied</ion-label>
    </ion-item>
    <ion-item>
      <ion-toggle checked="false"></ion-toggle>
      <ion-label>
        Push Notifications
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Hilfe/FAQ</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>H10-App Empfehlen</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Nutzungshinweise</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Datenschutzerklarung</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Impressum</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Feedback</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Verwendete Bibliotheken</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
`
})
export class SettingPage {

  constructor(public params: NavParams, public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
