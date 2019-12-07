import { Component, OnInit } from '@angular/core';
import {CharacterResponseInterface, CharacterInterface} from '../../interfaces/rick-morty';
import { RickMortyService } from '../../services/rick-morty.service';
import {FilterPipe} from '../../pipes/filter.pipe';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characterList: CharacterInterface[] = [];
  buscar: string;

  names:any; //pipe

  constructor(private rickMortyService: RickMortyService) {
    this.buscar = 'hola';
    //pipe
    this.names = [];

  }

  ngOnInit() {
    this.rickMortyService.getCharacters()
    .subscribe((r: CharacterResponseInterface) => {
      let results: CharacterInterface[] = r.results;

      let formattedResults = results.map(({ id, name, image, species, gender, location }) => ({
        id,
        name,
        image,
        species,
        gender,
        location,
      }))
      this.characterList = [...formattedResults];
      this.characterList.forEach(element => {
        this.names.push(element);
      });
      console.log(this.characterList[0].name);
    });
    
    
  }
}