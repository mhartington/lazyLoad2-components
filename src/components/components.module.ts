import { NgModule } from '@angular/core';
import { MusicCardComponent } from './music-card/music-card'
import { MusicItemComponent } from './music-item/music-item'
import {IonicModule}  from 'ionic-angular'
import { PipesModule } from '../pipes/pipes.module'
@NgModule({
  declarations: [MusicCardComponent, MusicItemComponent],
  imports: [PipesModule, IonicModule],
  exports: [MusicCardComponent, MusicItemComponent]
})
export class ComponentsModule { }
