import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsResumeComponent } from './projects-resume.component';

describe('ProjectsResumeComponent', () => {
  let component: ProjectsResumeComponent;
  let fixture: ComponentFixture<ProjectsResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsResumeComponent]
    });
    fixture = TestBed.createComponent(ProjectsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
