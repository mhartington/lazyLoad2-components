import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SpotifyProvider } from '../../providers/spotify/spotify'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tracks;
  public searchForm: FormGroup

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public spotify: SpotifyProvider
  ) {
      this.searchForm = this.fb.group({
        'term': ['', Validators.required]
      })
  }

  formSubmit(){
    let term = this.searchForm.get('term').value;
    this.spotify.load(term).subscribe(
      results => this.tracks = results.tracks.items,
      err => this.tracks = [],

    )
  }
}
