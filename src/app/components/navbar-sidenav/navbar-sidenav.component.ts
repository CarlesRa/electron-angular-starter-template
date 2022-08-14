import {Component, Input, OnInit} from '@angular/core';
import {SidenavItems} from '../../models/sidenav/sidenav-items.model';

@Component({
  selector: 'app-navbar-sidenav',
  templateUrl: './navbar-sidenav.component.html',
  styleUrls: ['./navbar-sidenav.component.css']
})
export class NavbarSidenavComponent implements OnInit {
  @Input() canShowDivider = false;
  isLoading = true;
  sidenavItems: SidenavItems;

  constructor() {
    this.sidenavItems = new SidenavItems();
    this.isLoading = false;
  }

  ngOnInit(): void {
  }
}
