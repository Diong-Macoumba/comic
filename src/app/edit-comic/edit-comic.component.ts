import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicService } from '../comic.service';
import {Comic} from '../modele/Comic';

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.css']
})
export class EditComicComponent implements OnInit {

  currentComic:Comic = new Comic();
  idComic: any;

  constructor(private comicService: ComicService, private route: ActivatedRoute, private router: Router) {
    this.idComic = route.snapshot.params['idComic'];
  }

  ngOnInit(): void {
    this.comicService.getComic(this.idComic).subscribe(
      response => {
        this.currentComic = response;
        console.log(response);
      }
      ,error => {
        console.log(error);
      }
    );
  }

  updateComic() {
    this.comicService.updateComic(this.currentComic, this.idComic).subscribe(
      response => {
        console.log(response);
        alert("mise à jour effectuée");
        this.router.navigate(['listComics']);
      },
      error => {
        console.log(error);
        alert("erreur dans la modification");
      }
    );
  }


}
