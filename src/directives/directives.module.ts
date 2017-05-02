import { NgModule } from '@angular/core';
import { LogElmDirective } from './log-elm/log-elm'
import { LogEvntDirective } from './log-evnt/log-evnt'

@NgModule({
  declarations: [LogElmDirective, LogEvntDirective],
  exports: [LogElmDirective, LogEvntDirective]
})
export class DirectivesModule {}
