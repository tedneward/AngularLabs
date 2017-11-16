import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { JokeDetailComponent } from './joke-detail.component';
import {JokeService} from '../joke.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('JokeDetailComponent', () => {
  let component: JokeDetailComponent;
  let fixture: ComponentFixture<JokeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([{path: '', component: JokeDetailComponent}])],
      declarations: [ JokeDetailComponent ],
      providers: [JokeService, {
        provide: ActivatedRoute,
        useValue: {snapshot: {params: {'jokeId': '1'}}}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([JokeService, ActivatedRoute],
    (service: JokeService, activatedRoute: ActivatedRoute) => {
    expect(component).toBeTruthy();
  }));
});
