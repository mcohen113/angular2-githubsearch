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
  repos: any;
  username: string;

  constructor(private _githubService:GithubService) {
    console.log('Github Component Init');

    this._githubService.getUser().subscribe(user => {
     // console.log(users);
     this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
     // console.log(users);
     this.repos = repos;
    });
  }

  search(){
    console.log(this.username);
  }
}
