import { Routes } from '@angular/router';
import { AboutpageComponent } from './MyComponents/aboutpage/aboutpage.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

export const routes: Routes = [
    { path: 'main', component: TodosComponent },
  { path: 'about', component: AboutpageComponent },
];
