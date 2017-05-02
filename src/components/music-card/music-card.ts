import { Component, Input } from '@angular/core';
@Component({
  selector: 'music-card',
  templateUrl: 'music-card.html'
})
export class MusicCardComponent {
  @Input() track;
  constructor() {}
}
