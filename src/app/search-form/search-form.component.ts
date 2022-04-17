import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  username!: string;
  isEmpty!: boolean;
  dataService: DataService;

  constructor(dataService: DataService, private router: Router) {
    this.dataService = dataService;
  }

  userSearch() {
    if (this.username) {
      this.dataService.getData(this.username);
      this.router.navigate(['../results']);
    } else {
      this.isEmpty = true;
    }
  }
  hideAlert() {
    this.isEmpty = false;
  }

  ngOnInit(): void {
    this.isEmpty = false;
  }
}