import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { ComponentsModule } from '../../components/components.module'
import { DirectivesModule } from '../../directives/directives.module'
@NgModule({
  declarations: [DetailPage],
  imports: [DirectivesModule, ComponentsModule, IonicPageModule.forChild(DetailPage)]
})
export class DetailPageModule { }
