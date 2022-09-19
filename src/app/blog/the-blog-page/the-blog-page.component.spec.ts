import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBlogPageComponent } from './the-blog-page.component';

describe('TheBlogPageComponent', () => {
  let component: TheBlogPageComponent;
  let fixture: ComponentFixture<TheBlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBlogPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
