import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getauthors() {
    return this._http.get('/authors');
  }

  getauthor(id) {
    return this._http.get(`/authors/${id}`);
  }

  updateauthor(author,_id) {
    return this._http.put(`/authors/${_id}`,author);
  }

  createauthor(author) {
    return this._http.post('/authors',author);
  }

  deleteauthor(id) {
    return this._http.delete(`/authors/${id}`);
  }

}
