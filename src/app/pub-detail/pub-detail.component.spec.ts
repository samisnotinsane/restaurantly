import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubDetailComponent } from './pub-detail.component';

describe('PubDetailComponent', () => {
  let component: PubDetailComponent;
  let fixture: ComponentFixture<PubDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
