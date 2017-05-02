import { Directive, Input } from '@angular/core';
@Directive({
  selector: '[logElm]' // Attribute selector
})
export class LogElmDirective {
  @Input() logElm
  constructor() {}
  ngAfterViewInit(){
    console.log(this.logElm)
  }

}
