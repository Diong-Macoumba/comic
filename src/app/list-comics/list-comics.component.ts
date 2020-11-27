import { Component, OnInit } from '@angular/core';
import {ComicService} from '../comic.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comic} from '../modele/Comic';

@Component({
  selector: 'app-list-comics',
  templateUrl: './list-comics.component.html',
  styleUrls: ['./list-comics.component.css']
})
export class ListComicsComponent implements OnInit {

  idRoute: number;
  comics: any;
  mc:string = "";
  page:number = 0;
  size:number = 5;
  pagesTotal: Array<number> = [];


  constructor(private comicService: ComicService, private router:Router, private  activedRoute: ActivatedRoute) {
    this.idRoute = this.activedRoute.snapshot.params.id;
  }


  ngOnInit(): void {

  }

      listComics(): void {
        this.comicService.listComic(this.mc, this.page, this.size).subscribe(
          response => {
            this.comics = response;
            this.pagesTotal = new Array<number>(response.totalPages);
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      }

      chercherComic(): void {
        this.listComics();
      }

      getComicByid(idRoute: number){
        this.router.navigate(['comicDetail', idRoute]);
        this.comicService.getComic(this.idRoute).subscribe(
          response => {
            this.comics = response;
            console.log(response);
          },
          error => {
            
            console.log(error)
          }
        )
      }

  nextPage(i: number) {
  this.page = i;
  this.listComics();
  }

  editComic(idComic: number) {
    this.router.navigate(['editComic', idComic]);
  }

  detailComic(idComic: number) {
    this.router.navigate(['comicDetail', idComic]);
  }

  supprimerComic(c: Comic) {
    let confirmation = confirm("Etes vous sure de vouloir supprimer !");
    if( confirmation) {
     this.comicService.deleteComic(c.idComic).subscribe(
       response => {
         this.comics.content.splice(
           this.comics.content.indexOf(c),1
         );
       },
       error => {
         console.log(error);
       }
     );
    }
  }
}
