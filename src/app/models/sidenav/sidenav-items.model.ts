import {SidenavItem} from './sidenav-item.model';

export class SidenavItems {
  items: SidenavItem[];

  constructor() {
    this.items = [];
    this.items.push(
      { name: 'Home', navLink: '/home', icon: 'home'},
      // TODO: more menu options here
    )
  }
}
