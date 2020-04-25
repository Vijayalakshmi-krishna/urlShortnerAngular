import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortboxComponent } from './url-shortbox.component';

describe('UrlShortboxComponent', () => {
  let component: UrlShortboxComponent;
  let fixture: ComponentFixture<UrlShortboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlShortboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlShortboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
