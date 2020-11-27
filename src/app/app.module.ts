import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { AlbumComponent } from './album/album.component';
import {Routing} from '../app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListComicsComponent } from './list-comics/list-comics.component';
import { DetailComicComponent } from './detail-comic/detail-comic.component';
import { EditComicComponent } from './edit-comic/edit-comic.component';
import { ListAlbumComponent } from './list-album/list-album.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';


@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    AlbumComponent,
    ListComicsComponent,
    DetailComicComponent,
    EditComicComponent,
    ListAlbumComponent,
    DetailAlbumComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
