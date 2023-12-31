import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoComponent } from './components/todo/todo.component';
import { ModalComponent } from './components/modal/modal.component';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { FirstLetterUppercasePipe } from './shared/pipes/first-letter-uppercase.pipe';
import { FormsModule } from '@angular/forms';
import { FirstLetterDirective } from './shared/directives/first-letter.directive';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { todoListReducer } from './components/store/todo-list.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TodoListEffects } from './components/store/todo-list.effects';

registerLocaleData(localePl);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    AlertComponent,
    AddTodoFormComponent,
    TodoComponent,
    ModalComponent,
    FirstLetterUppercasePipe,
    FirstLetterDirective,
    HomeComponent,
    Page404Component,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoListReducer}),
    EffectsModule.forRoot([TodoListEffects])

  ],
  providers: [{provide: LOCALE_ID, useValue: 'pl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
