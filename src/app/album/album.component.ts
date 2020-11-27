import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import {Comic} from '../modele/Comic';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


 album = {
    title: '',
    numero: 0,
    publicationDate: Date,
    coverName: '',
   comic: new Comic()
  };

  albums: any;

  submitted = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  createAlbum(): void {
    const  data = {
      title: this.album.title,
      numero: this.album.numero,
      publicationDate: this.album.publicationDate,
      coverName: this.album.coverName,
      comic: this.album.comic
    };

    this.albumService.createAlbum(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      }
      , error => {
        console.log(error);
      }
    );
  }

  newAlbums(): void {
    this.album = {
         title: '',
      numero: 0,
         publicationDate: Date,
         coverName: '',
      comic: new Comic()
    };
  }
}
