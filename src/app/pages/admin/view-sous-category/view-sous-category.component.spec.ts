import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSousCategoryComponent } from './view-sous-category.component';

describe('ViewSousCategoryComponent', () => {
  let component: ViewSousCategoryComponent;
  let fixture: ComponentFixture<ViewSousCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSousCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSousCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
