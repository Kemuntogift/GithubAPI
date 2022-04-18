import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  private username!: string;
  private apiKey = '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';

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
  getProfileRepos() {
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

  

 





