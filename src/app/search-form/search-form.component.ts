import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [DataService],
})
export class SearchFormComponent implements OnInit {
  repos: any = [];
  profile: any = [];
  info: any = [];
  username: string = '';
  display: any = true;

  constructor(private dataService: DataService) {
    this.dataService.getdata().subscribe((info) => {
      console.log('repos.3' + info);
      this.info = info;
    });
    this.dataService.getUserRepos().subscribe((repos) => {
      console.log('repo' + repos);
      this.repos = repos;
    });
  }
  ngOnInit(): void {}
  
  findProfile() {
    this.display = false;
    this.dataService.updateProfile(this.username);
    this.dataService.getProfileInfo().subscribe((profile) => {
      console.log(profile);
      this.profile = profile;
    });
    this.dataService.getRepos(this.username).subscribe((repos) => {
      console.log('repos.1' + repos);
      this.repos = repos;
    });

    this.dataService.getProfileInfo().subscribe((info) => {
      console.log('repos.2' + info);
      this.info = info;
    });
  }
}