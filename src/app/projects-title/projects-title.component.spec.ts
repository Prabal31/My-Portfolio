import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTitleComponent } from './projects-title.component';

describe('ProjectsTitleComponent', () => {
  let component: ProjectsTitleComponent;
  let fixture: ComponentFixture<ProjectsTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsTitleComponent]
    });
    fixture = TestBed.createComponent(ProjectsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
