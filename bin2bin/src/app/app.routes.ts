import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { List } from './components/list/list';
import { Logs } from './components/logs/logs';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch: "full"},
    {path:"home", component: Home },
    {path:"list", component: List},
    {path:"logs", component: Logs}
];
