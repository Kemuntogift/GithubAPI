import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  username!: string;

  @Output() profileSearch = new EventEmitter<any>();
  searchItem: any;

  search() {
    this.profileSearch.emit(this.searchItem);
  }
  
  constructor() {}

  ngOnInit(): void {}
}
