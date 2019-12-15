import { Component, OnInit } from '@angular/core';
import {Movie} from '../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    name: 'Dark Knight'
  }
  constructor() { }

  ngOnInit() {
  }

}
