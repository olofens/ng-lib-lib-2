import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeLibraryComponent } from './oe-library.component';

describe('OeLibraryComponent', () => {
  let component: OeLibraryComponent;
  let fixture: ComponentFixture<OeLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
