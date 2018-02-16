import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../service/pokedex.service';
import { Observable } from 'rxjs/Observable';
import { PokeListItem } from '../../models/poke-list-item';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokelistItems$: Observable<PokeListItem[]>;
  constructor(private pokedexService: PokedexService) {
    this.pokelistItems$ = pokedexService.getPokemons();
  }

  ngOnInit() {
  }

}
