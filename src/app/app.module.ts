import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {JokeListComponent} from './joke-list/joke-list.component';
import {JokeDetailComponent} from './joke-detail/joke-detail.component';
import {JokeService} from './joke.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
    { path: 'jokes', component: JokeListComponent },
    { path: 'jokes/:jokeId', component: JokeDetailComponent },
    { path: '', pathMatch: 'full', redirectTo: 'jokes' }
];

@NgModule({
    declarations: [
        AppComponent,
        JokeListComponent,
        JokeDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [JokeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
