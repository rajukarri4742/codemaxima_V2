import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCommonComponent } from './video-common.component';

describe('VideoCommonComponent', () => {
  let component: VideoCommonComponent;
  let fixture: ComponentFixture<VideoCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
