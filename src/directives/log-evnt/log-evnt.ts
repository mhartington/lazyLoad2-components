import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[logEvnt]'
})
export class LogEvntDirective {
  constructor() {
    console.log('Hello LogEvntDirective Directive');
  }

  @HostListener('click', ['$event'])
  onClick(event){
    console.log(event)
  }

}
