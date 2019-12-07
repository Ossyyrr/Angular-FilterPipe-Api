import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'https://rickandmortyapi.com/api/character/';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) {  }

  getCharacters() {
    return this.http.get(url);
  }


}
