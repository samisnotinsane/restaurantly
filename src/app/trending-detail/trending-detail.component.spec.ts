import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetailComponent } from './trending-detail.component';

describe('TrendingDetailComponent', () => {
  let component: TrendingDetailComponent;
  let fixture: ComponentFixture<TrendingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
