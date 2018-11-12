import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',

})
export class TarjetasComponent {
  @Input() items: any[] = [];
  constructor(private router: Router) { }


  viewArtist(song: any) {
    let artistId;
    if (song.type === 'artist') {
      artistId = song.id;
    } else {
      artistId = song.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }


}
