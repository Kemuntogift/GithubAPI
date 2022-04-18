import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { count } from 'console';
// import { catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private user: any;
  private username: string;
  private _Url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
    console.log('service is ready');
    this.username = 'Kemuntogift';
  }

  getdata() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username +
        '?api_key=' +
        this.apiKey
    );
  }
  getRepos() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username +
        '?api_key=' +
        this.apiKey
    );
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

  

 





