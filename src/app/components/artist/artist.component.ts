import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {
  artista: any[] = [];
  tracks:any[] = [];

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      this.getSelectArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getSelectArtist(id: string) {
    this.spotify.getSelectArtist(id)
      .subscribe((data: any) => {
        // console.log(data)
        this.artista = data;
      })
  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
    .subscribe((toptracks:any)=>{
      console.log(toptracks)
      this.tracks = toptracks;
    })
  }


}
