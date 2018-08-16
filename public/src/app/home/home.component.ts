import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    let observable = this._httpService.getauthors()
    observable.subscribe(data => {
      this.authors = data['authors'];
    })
  }

  deleteAuthor(id) {
    let observable = this._httpService.deleteauthor(id);
    observable.subscribe(data => {
      console.log("clicked on delete",id);
      this.getAuthors();
    })
  }

}
