import { Component, OnInit } from '@angular/core';
import {ComicService} from '../comic.service';
import {Comic} from '../modele/Comic';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-comic',
  templateUrl: './detail-comic.component.html',
  styleUrls: ['./detail-comic.component.css']
})
export class DetailComicComponent implements OnInit {

  comic: Comic = new Comic();
  idComic: number;
  constructor(private comicService: ComicService, private route: ActivatedRoute) {
    this.idComic = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.comicService.getComic(this.idComic).subscribe(
      response => {
        this.comic = response;
        console.log(response);
      }
      ,error => {
        console.log(error);
      }
    );
  }

}
