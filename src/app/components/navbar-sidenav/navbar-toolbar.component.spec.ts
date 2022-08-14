import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarToolbarComponent } from './navbar-toolbar.component';

describe('NavbarComponent', () => {
  let component: NavbarToolbarComponent;
  let fixture: ComponentFixture<NavbarToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
