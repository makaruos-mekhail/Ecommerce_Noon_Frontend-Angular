import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidbarAllcategoryComponent } from './slidbar-allcategory.component';

describe('SlidbarAllcategoryComponent', () => {
  let component: SlidbarAllcategoryComponent;
  let fixture: ComponentFixture<SlidbarAllcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidbarAllcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidbarAllcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
