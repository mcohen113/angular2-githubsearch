import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username = 'mcohen113';
  private client_id = '3eb927da514cba85e797';
  private client_secret='81be5994db019e75c488e09d1dcfafafbc51922b';

  constructor(private _http:Http) {
    console.log('Github Service Init... ')
  }
}
