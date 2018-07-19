import { APIService } from './services/service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VerticalTimelineModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
