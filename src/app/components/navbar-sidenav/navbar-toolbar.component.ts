import { Component, OnInit } from '@angular/core';
import {SidenavItems} from '../../models/sidenav/sidenav-items.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-sidenav',
  templateUrl: './navbar-toolbar.component.html',
  styleUrls: ['./navbar-toolbar.component.css']
})
export class NavbarToolbarComponent implements OnInit {
  isLoading = true;
  sidenavItems: SidenavItems;

  constructor(
    private router: Router,
  ) {
    this.sidenavItems = new SidenavItems();
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  navigateTo(): void {

  }

}
