import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  newAuthor = {name:"",quotes:""};
  errors = {};

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  submitAuthor() {
    let observable = this._httpService.createauthor(this.newAuthor)
    observable.subscribe(data => {
        if (data['status'] == 500) {
          this.errors = data['errors']['errors']
          console.log(this.errors)
      }
      else {
        console.log("got data from post back ",data)
        this.newAuthor = {name:"",quotes:""};
        this._router.navigate(['/home']);
      }
    })
  }

}
