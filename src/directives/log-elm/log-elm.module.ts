import { NgModule } from '@angular/core';
import { LogElmDirective  } from './log-elm';
@NgModule({
  declarations: [LogElmDirective],
  exports: [LogElmDirective]
})
export class LogElmDirectiveModule { }
