import { Component, OnInit } from '@angular/core';
import {Comic} from '../modele/Comic';
import {ComicService} from '../comic.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Album} from '../modele/Album';
import {AlbumService} from '../album.service';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit {

  album:Album = new Album();
  idAlbum: number;

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private router: Router) {
    this.idAlbum = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.albumService.getAlbum(this.idAlbum).subscribe(
      response => {
        this.album = response;
        console.log(response);
      }
      ,error => {
        console.log(error);
      }
    );
  }

}
