import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeListComponent } from './joke-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {JokeService} from "../joke.service";

describe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ JokeListComponent ],
        providers: [ JokeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
