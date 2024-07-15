import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReadTaskComponent } from './read-task/read-task.component';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { DeleteTaskComponentComponent } from './delete-task/delete-task-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    ReadTaskComponent,
    ShowTasksComponent,
    UpdateTaskComponent,
    DeleteTaskComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
