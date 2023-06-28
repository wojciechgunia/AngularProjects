import { Page404Component } from './components/page404/page404.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: 'Home'},
  { path: 'todo-list', component: TodoListComponent, title: 'Todo List'},
  { path: 'todo-list/:id', component: TodoDetailsComponent, title: 'Todo details!'},
  { path: '**', component: Page404Component, title: '404 - Page not found!'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule
{

}
