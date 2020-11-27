import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  dataLink = 'http://localhost:8080/comics';

  constructor( private httpClient: HttpClient) { }

  listComic(mc:string, page:number, size:number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/chercherComics?mc="+mc+"&page="+page+"&size="+size);
  }

  getComic(id: number): Observable<any> {
    return this.httpClient.get(`${this.dataLink}/${id}`);
  }

  createComic(data: any): Observable<any> {
    return this.httpClient.post(this.dataLink, data);
  }

  updateComic(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.dataLink}/${id}`, data);
  }

  deleteComic(id: number): Observable<any> {
    return this.httpClient.delete(`${this.dataLink}/${id}`);
  }

}
