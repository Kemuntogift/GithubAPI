import { Component, OnInit } from '@angular/core';

import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  profile!: any[];
  repos!: any[];
  username!: string;

  constructor(private dataService: DataService) {
    this.dataService.getdata().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
  this.dataService.getRepos().subscribe((repos) => {
    console.log(repos);
    this.repos = repos;
  });
}

  ngOnInit(): void {}
}