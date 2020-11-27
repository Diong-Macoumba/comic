import { Component, OnInit } from '@angular/core';
import {ComicService} from '../comic.service';

@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.css']
})
export class ListComicsComponent implements OnInit {

  constructor(private comicService: ComicService) { }

  comics: any;
  currentComic = null;
  index = -1;
  title = '';

  ngOnInit(): void {
  }

      listComics(): void {
        this.comicService.listComic().subscribe(
          response => {
            this.comics = response;
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      }

      refresh(): void {
        this.listComics();
        this.currentComic = null;
        this.index = -1;
      }

      setCurrentComic(comic: any, index: any): void {
        this.currentComic = comic;
        this.index = index;
      }

      deleteAllComic(): void {
        this.comicService.deleteAllComic().subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      }

      findByTitle(): void {
        this.comicService.getComic(this.title).subscribe(
          response => {
            this.comics = response;
            console.log(response);
          }
          , error => {
            console.log(error);
          }
        );
      }

}
