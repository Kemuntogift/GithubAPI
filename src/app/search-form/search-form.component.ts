import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data-service/data.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy{
  title = 'githubApi';

  mySubscription: Subscription = new Subscription();
  

  
  constructor(private dataService: DataService ) {}
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
  repos =[]
  ngOnInit(): void {}}