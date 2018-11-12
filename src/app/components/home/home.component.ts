import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  newSongs: any[] = [];
  error: boolean = false;
  messageError:string;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
      },(errorService)=>{
        this.error = true;
        console.log(errorService.message)
        this.messageError = errorService.message;
        // this.messageError = errorService.error.error.message;
        
      })

  }


}
