import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public track = {
    "artistName": "Adele",
    "images": "https://i.scdn.co/image/797009754c30847254b48de483f256258d90df7f",
    "name": "Hello",
    "album": "Hello",
    "duration_ms": 295493,
    "preview_url": "https://p.scdn.co/mp3-preview/0b90429fd554bad6785faa2b8931d613db4a0ee4?cid=null"
  }

  constructor(public navCtrl: NavController) {

  }

}
