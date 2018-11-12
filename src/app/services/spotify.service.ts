import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDRttFEe0pTz3A2e5-Y5Ncl6tMmorwsp83wuZ52peP8xwL7gzLesCpTFn6N6XK-Ay7cGrtg0zFSef3-uJ0'
    });
    return this.http.get(url, { headers })

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items))
  }


  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items))

  }

  getSelectArtist(id: string) {
    return this.getQuery(`artists/${id}`)

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']))

  }


}
