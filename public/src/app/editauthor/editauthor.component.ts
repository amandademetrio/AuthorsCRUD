import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  upAuthor = {};
  errors = {};

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.findAuthor(params.id);
  });
  }

  findAuthor(id) {
    let observable = this._httpService.getauthor(id)
    observable.subscribe(data => {
      this.upAuthor = data['author'];
    })
  }

  submitAuthor(upAuthor) {
    let observable = this._httpService.updateauthor(upAuthor,upAuthor._id)
    observable.subscribe(data => {
      if (data['status'] == 500) {
        this.errors = data['errors']['errors']
        console.log(this.errors)
      }
      else {
        this._router.navigate(['/home']);
      }
    })
  }

}
