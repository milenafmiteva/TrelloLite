import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { CompleateComponent } from './components/compleate/compleate.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    InprogressComponent,
    CompleateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
