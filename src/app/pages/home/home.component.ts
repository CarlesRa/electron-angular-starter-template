import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appTitle = 'App';

  constructor(
    private title: Title
  ) {
    console.log('Home component constructor');
    title.setTitle(this.appTitle);
  }

  ngOnInit(): void {

  }

}
