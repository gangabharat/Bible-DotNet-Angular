import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVerseDetailComponent } from './bible-verse-detail.component';

describe('BibleVerseDetailComponent', () => {
  let component: BibleVerseDetailComponent;
  let fixture: ComponentFixture<BibleVerseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleVerseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleVerseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
