import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { PokeListItem } from '../models/poke-list-item';

@Injectable()
export class PokedexService {
  private baseUrl = 'https://angular-hogent.azurewebsites.net/api/pokemon';
  constructor(private httpclient: HttpClient) { }

  getPokemons() {
    return this.httpclient.get(`${this.baseUrl}`).map(r => {
      const items = ((r as any).pokemon_entries as any[]);
      return items.map(i =>  new PokeListItem(i.entry_number, i.pokemon_species.name));
    });
  }
}
