import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user!: User;
  repo!: Repo;
  repos = [];

  getData: any;

  constructor() {}
}
