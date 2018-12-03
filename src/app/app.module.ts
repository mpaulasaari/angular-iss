import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { MapComponent } from './map.component'
import { IssComponent } from './iss.component'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    IssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
