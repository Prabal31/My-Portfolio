import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProjectsComponent } from './menu-projects.component';

describe('MenuProjectsComponent', () => {
  let component: MenuProjectsComponent;
  let fixture: ComponentFixture<MenuProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProjectsComponent]
    });
    fixture = TestBed.createComponent(MenuProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
