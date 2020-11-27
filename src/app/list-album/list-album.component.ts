import { Component, OnInit } from '@angular/core';
import {ComicService} from '../comic.service';
import {Router} from '@angular/router';
import {Comic} from '../modele/Comic';
import {AlbumService} from '../album.service';
import {Album} from '../modele/Album';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.css']
})
export class ListAlbumComponent implements OnInit {

  constructor(private albumService: AlbumService, private router:Router) { }

  albums: any;
  mc:string = "";
  page:number = 0;
  size:number = 5;
  pagesTotal: Array<number> = [];

  ngOnInit(): void {
  }

  listAlbums(): void {
    this.albumService.listAlbum(this.mc, this.page, this.size).subscribe(
      response => {
        this.albums = response;
        this.pagesTotal = new Array<number>(response.totalPages);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  chercherAlbums(): void {
    this.listAlbums();
  }

  nextPage(i: number) {
    this.page = i;
    this.listAlbums();
  }

  editAlbum(idAlbum: number) {
    this.router.navigate(['editAlbum', idAlbum]);
  }

  supprimerAlbum(a: Album) {
    let confirmation = window.confirm("Etes vous sure de vouloir supprimer !");
    if( confirmation = true) {
      this.albumService.deleteAlbum(a.idAlbum).subscribe(
        response => {
          this.albums.content.splice(
            this.albums.content.indexOf(a),1
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
