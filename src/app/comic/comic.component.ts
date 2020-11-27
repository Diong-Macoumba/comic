import { Component, OnInit } from '@angular/core';
import {ComicService} from '../comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comic = {
    title: '',
    scriptWriter: '',
    illustrator: '',
    publisher: '',
    favorite: ''
  };

  comics: any;

  submitted = false;

  constructor(private comicService: ComicService) { }

  ngOnInit(): void {
  }

  createComic(): void {
    const  data = {
      title: this.comic.title,
      scriptWriter: this.comic.scriptWriter,
      illustrator: this.comic.illustrator,
      publisher: this.comic.publisher,
      favorite: this.comic.favorite
    };

    this.comicService.createComic(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      }
      , error => {
        console.log(error);
      }
    );
  }

  newComic(): void {
    this.comic = {
     title: '',
         scriptWriter: '',
         illustrator: '',
         publisher: '',
         favorite: ''
    };
  }
}
