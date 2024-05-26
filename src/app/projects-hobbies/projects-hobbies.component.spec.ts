import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsHobbiesComponent } from './projects-hobbies.component';

describe('ProjectsHobbiesComponent', () => {
  let component: ProjectsHobbiesComponent;
  let fixture: ComponentFixture<ProjectsHobbiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsHobbiesComponent]
    });
    fixture = TestBed.createComponent(ProjectsHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
