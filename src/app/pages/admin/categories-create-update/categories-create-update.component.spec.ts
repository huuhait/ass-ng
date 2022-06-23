import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCreateUpdateComponent } from './categories-create-update.component';

describe('CategoriesCreateUpdateComponent', () => {
  let component: CategoriesCreateUpdateComponent;
  let fixture: ComponentFixture<CategoriesCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
