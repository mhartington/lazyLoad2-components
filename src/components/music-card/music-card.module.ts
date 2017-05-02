import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MusicCardComponent } from './music-card';
import { MsToMinsPipeModule } from '../../pipes/ms-to-mins/ms-to-mins.module'
@NgModule({
  declarations: [MusicCardComponent],
  imports: [IonicModule, MsToMinsPipeModule],
  exports: [MusicCardComponent]
})
export class MusicCardComponentModule { }
