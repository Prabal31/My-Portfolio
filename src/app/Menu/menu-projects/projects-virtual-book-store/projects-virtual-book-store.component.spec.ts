import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsVirtualBookStoreComponent } from './projects-virtual-book-store.component';

describe('ProjectsVirtualBookStoreComponent', () => {
  let component: ProjectsVirtualBookStoreComponent;
  let fixture: ComponentFixture<ProjectsVirtualBookStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsVirtualBookStoreComponent]
    });
    fixture = TestBed.createComponent(ProjectsVirtualBookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
