import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';


@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: 'github.component.html',
  providers:[GithubService]
})
export class GithubComponent  {
  user: any;

  constructor(private _githubService:GithubService) {
    console.log('Github Component Init');

    this._githubService.getUser().subscribe(user => {
     // console.log(users);
     this.user = user;
    });
  }

}
