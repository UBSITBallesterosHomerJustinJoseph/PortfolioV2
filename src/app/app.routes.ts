import { Routes } from '@angular/router';
import { Home } from './home/home';
import { FirstGrading } from './first-grading/first-grading';
import { MidTerms } from './mid-terms/mid-terms';
import { Finals } from './finals/finals';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'first-grading', component: FirstGrading},
    {path: 'mid-terms', component: MidTerms},
    {path: 'finals', component: Finals}
    ,{ path: '**', redirectTo: 'home' }
];
