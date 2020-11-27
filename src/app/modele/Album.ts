import {Comic} from './Comic';

export class Album {
  idAlbum: number = 0;
  title: string = '';
  numero: string = '';
  publicationDate: Date = new Date();
  coverName: string = '';
  comic: Comic = new Comic();
}
