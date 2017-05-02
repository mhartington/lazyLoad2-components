import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MusicItemComponent } from './music-item';
import { MsToMinsPipeModule } from '../../pipes/ms-to-mins/ms-to-mins.module'
@NgModule({
  declarations: [MusicItemComponent],
  imports: [IonicModule, MsToMinsPipeModule],
  exports: [MusicItemComponent]
})
export class MusicItemComponentModule { }
