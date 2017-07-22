import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { ShrinkingSegmentHeader } from './shrinking-segment-header';

@NgModule({
  declarations: [
    ShrinkingSegmentHeader,
  ],
  imports: [
    IonicPageModule .forChild(ShrinkingSegmentHeader),
  ],
  exports: [
    ShrinkingSegmentHeader
  ]
})
export class ShrinkingSegmentHeaderModule {}
