import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular';
import { IonicAudioModule, AudioProvider, audioProviderfactory } from '../../app/ionic-audio/ionic-audio.module';

import { ShrinkingSegmentHeader } from '../../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
  declarations: [HomePage, ShrinkingSegmentHeader],
  imports: [IonicPageModule.forChild(HomePage), IonicAudioModule],
  entryComponents: [HomePage],
  providers: [{ provide: AudioProvider, useFactory: audioProviderfactory }]
})
export class HomePageModule { }
