import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-d6BEE-N_Ej0pPYkb-wnhmKfmPYK1GRo',
    }),
    AgmDirectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
