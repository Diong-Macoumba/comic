import {RouterModule, Routes} from '@angular/router';
import {ComicComponent} from './app/comic/comic.component';
import {AlbumComponent} from './app/album/album.component';
import {ListComicsComponent} from './app/list-comics/list-comics.component';
import {EditComicComponent} from './app/edit-comic/edit-comic.component';
import {ListAlbumComponent} from './app/list-album/list-album.component';
import {DetailComicComponent} from './app/detail-comic/detail-comic.component';
import {DetailAlbumComponent} from './app/detail-album/detail-album.component';




const appRoutes: Routes = [
  { path: 'comics' , component: ComicComponent },
  { path: 'listComics' , component: ListComicsComponent },
  { path: 'albums' , component: AlbumComponent },
  { path: 'editComic/:id' , component: EditComicComponent },
  { path: 'listAlbums' , component: ListAlbumComponent },
  { path: 'comicDetail/:id' , component: DetailComicComponent },
  { path: 'albumDetail/:id' , component: DetailAlbumComponent },
  { path: '' , redirectTo: '/listComics', pathMatch: 'full'}
];

export const Routing = RouterModule.forRoot(appRoutes);

