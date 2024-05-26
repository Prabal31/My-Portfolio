import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSubtitleComponent } from './projects-subtitle.component';

describe('ProjectsSubtitleComponent', () => {
  let component: ProjectsSubtitleComponent;
  let fixture: ComponentFixture<ProjectsSubtitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsSubtitleComponent]
    });
    fixture = TestBed.createComponent(ProjectsSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
