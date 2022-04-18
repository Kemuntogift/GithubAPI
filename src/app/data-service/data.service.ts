import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private profile: any;
  private username: string;
  private Url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
    this.username = 'Kemuntogift';
  }

  ngOnInit() {
  //request
    this.http.get<any>('https://api.github.com/users').subscribe((data) => {
      this.username = data.total;
      console.log(this.username);
    });
  }
  //get my info
  getdata() {
    return this.http.get('https://api.github.com/users/' + this.username);
  }
  //get repo info
  getUserRepos() {
    return this.http.get(
      'https://api.github.com/users/' + this.username + '/repos'
    );
  }

  getProfiles() {
    return this.http.get<any[]>(this.Url);
  }

  getProfileInfo() {
    return this.http.get(
      'https://api.github.com/users/' +
        this.username +
        '?access_token=' +
        environment.apiKey
    );
  }

  getRepos(profile: any) {
    let userrepo = this.http.get(
      'https://api.github.com/users/' +
        this.username +
        '/repos?access_token=' +
        environment.apiKey
    );
    console.log(userrepo);
    return userrepo;
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

 





