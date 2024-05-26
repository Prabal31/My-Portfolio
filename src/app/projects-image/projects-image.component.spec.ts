import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsImageComponent } from './projects-image.component';

describe('ProjectsImageComponent', () => {
  let component: ProjectsImageComponent;
  let fixture: ComponentFixture<ProjectsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsImageComponent]
    });
    fixture = TestBed.createComponent(ProjectsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
