import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  dataLink = 'http://localhost:8080/albums';

constructor( private httpClient: HttpClient) { }

  listAlbum(mc:string, page:number, size:number): Observable<any> {
    return this.httpClient.get("http://localhost:8080//chercherAlbums?mc="+mc+"&page="+page+"&size="+size);
  }

  getAlbum(id: number): Observable<any> {
    return this.httpClient.get(`${this.dataLink}/${id}`);
  }

  createAlbum(data: any): Observable<any> {
    return this.httpClient.post(this.dataLink, data);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.httpClient.delete(`${this.dataLink}/${id}`);
  }

}
