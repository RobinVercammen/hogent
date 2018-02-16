import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { PokedexService } from './service/pokedex.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
