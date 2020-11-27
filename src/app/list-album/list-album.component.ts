import { Component, OnInit } from '@angular/core';
import {ComicService} from '../comic.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comic} from '../modele/Comic';
import {AlbumService} from '../album.service';
import {Album} from '../modele/Album';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.css']
})
export class ListAlbumComponent implements OnInit {

  idAlbum: number;

  constructor(private albumService: AlbumService, private router:Router, private  activedRoute: ActivatedRoute) {
    this.idAlbum = this.activedRoute.snapshot.params.id;
  }
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

  getAlbumByid(idAlbum: number){
    this.router.navigate(['albumDetail', idAlbum]);
    this.albumService.getAlbum(this.idAlbum).subscribe(
      response => {
        this.albums = response;
        console.log(response);
      },
      error => {
        console.log(error)
      }
    )
  }

  nextPage(i: number) {
    this.page = i;
    this.listAlbums();
  }

  detailAlbum(idAlbum: number) {
    this.router.navigate(['albumDetail', idAlbum]);
  }

  supprimerAlbum(a: Album) {
    let confirmation = confirm("Etes vous sure de vouloir supprimer !");
    if( confirmation) {
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
