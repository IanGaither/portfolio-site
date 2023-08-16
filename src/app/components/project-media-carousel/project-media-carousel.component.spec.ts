import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMediaCarouselComponent } from './project-media-carousel.component';

describe('ProjectMediaCarouselComponent', () => {
  let component: ProjectMediaCarouselComponent;
  let fixture: ComponentFixture<ProjectMediaCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMediaCarouselComponent]
    });
    fixture = TestBed.createComponent(ProjectMediaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
