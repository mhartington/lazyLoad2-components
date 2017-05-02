import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { MusicCardComponentModule } from '../../components/music-card/music-card.module'
import { MsToMinsPipeModule } from '../../pipes/ms-to-mins/ms-to-mins.module'
import { LogElmDirectiveModule } from '../../directives/log-elm/log-elm.module'
@NgModule({
  declarations: [DetailPage],
  imports: [
    LogElmDirectiveModule,
    MsToMinsPipeModule,
    MusicCardComponentModule,
    IonicPageModule.forChild(DetailPage)
  ]
})
export class DetailPageModule { }
