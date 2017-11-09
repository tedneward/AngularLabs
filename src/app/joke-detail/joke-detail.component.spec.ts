import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDetailComponent } from './joke-detail.component';

describe('JokeDetailComponent', () => {
  let component: JokeDetailComponent;
  let fixture: ComponentFixture<JokeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
