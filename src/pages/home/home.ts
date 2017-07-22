import { Component } from '@angular/core';
import { NavController, NavParams, Platform, IonicPage } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService, NativePageTransitions]
})
export class HomePage {

  Details: any[] = [
    {
      details: {
        content:[]
      }
    }
  ];

  singleTrack: any;
  tracks: any[];
  idx: number = 0;
  path: any = 'asset/';

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              public platform: Platform,
              public dataService: DataService,
              private nativePageTransitions: NativePageTransitions) {

      if(this.navParams.get('index')) {
        this.idx = this.navParams.get('index');
      }
      this.dataService.getListDetails()
        .subscribe((response)=> {
            this.Details = response
            console.log(this.Details);
        });

      if (this.platform.is('android')) {
          this.path = '/android_asset/www/assets/';
      }

      this.singleTrack = {
          src: this.path+"audio/01-joom-reab-sou.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        };

      /*this.tracks = [
        {
          src: path+"01-joom-reab-sou.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"02-sou-sday.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"03-joom-reab-lea.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"04-le_hai.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"05-ter-neak-sok-sabay-te.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"06-khnom-sok-sabay_te-aw-kun.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"07-rick-reeay-nas-del-ban-skall_-neak.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"08-ter-neak-maen-chhmos-arvey.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"09-khmom_mean_tschmoa.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"10-ter-neak-maen-aryok-punman.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"11-khmom_mean_aryok.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        },
        {
          src: path+"12-knhom-hort-nas.mp3",
          artist: 'Stephane Wrembel',
          title: 'Avengers',
          preload: 'metadata'
        }
      ];*/
  }

  getTrack(soundfile,title) {
    let track = {
      src: this.path+"audio/"+soundfile,
      artist: 'Stephane Wrembel',
      title: title,
      preload: 'metadata'
    }

    return track;
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
  }

  showMenu(idx) {
    /*let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nativePageTransitions.flip(options);*/
    this.navCtrl.setRoot('Menu', {
      index: idx
    });
  }

  ionViewWillLeave() {
    let options: NativeTransitionOptions = {
      direction: 'left',
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
