import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {MusicItemComponentModule} from '../../components/music-item/music-item.module'
import { LogEvntDirectiveModule } from '../../directives/log-evnt/log-evnt.module'
@NgModule({
  declarations: [HomePage],
  imports: [
    LogEvntDirectiveModule,
    MusicItemComponentModule,
    IonicPageModule.forChild(HomePage)
  ]
})
export class HomePageModule { }
