import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';
import {SidenavItems} from '../../models/sidenav/sidenav-items.model';
// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-navbar-sidenav',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './navbar-sidenav.component.html',
  styleUrls: ['./navbar-sidenav.component.css']
})
export class NavbarSidenavComponent implements OnInit {
  @Input() canShowDivider = true;
  isLoading = true;
  sidenavItems: SidenavItems;

  constructor() {
    this.sidenavItems = new SidenavItems();
    this.isLoading = false;
  }

  ngOnInit(): void {
  }
}
