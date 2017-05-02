import { NgModule } from '@angular/core';
import { MsToMinsPipe } from './ms-to-mins';

@NgModule({
  declarations: [MsToMinsPipe],
  exports: [MsToMinsPipe]
})
export class MsToMinsPipeModule { }
