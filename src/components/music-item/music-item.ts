import { Component, Input } from '@angular/core';
@Component({
  selector: 'music-item',
  templateUrl: 'music-item.html'
})
export class MusicItemComponent {
  @Input() track
  constructor() {}

}
