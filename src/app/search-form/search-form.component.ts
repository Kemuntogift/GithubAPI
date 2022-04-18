import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  public repos: any = [];
  public profiles: any = [];
  public info: any = [];

  constructor(private dataService: DataService) {
    this.dataService.getdata().subscribe((info) => {
      console.log(info);
      this.info = info;
    });
    this.dataService.getRepos().subscribe((repos) => {
      console.log('repo' + repos);
      this.repos = repos;
    });
  }
  ngOnInit(): void {
    this.dataService.getProfile().subscribe((data) => {
      this.profiles = data;
      console.log(data);
    });
  }
}