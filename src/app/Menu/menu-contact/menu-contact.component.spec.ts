import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContactComponent } from './menu-contact.component';

describe('MenuContactComponent', () => {
  let component: MenuContactComponent;
  let fixture: ComponentFixture<MenuContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuContactComponent]
    });
    fixture = TestBed.createComponent(MenuContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
