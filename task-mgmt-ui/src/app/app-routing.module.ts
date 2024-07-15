import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ReadTaskComponent } from './read-task/read-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';


const routes: Routes = [

  { path: '', redirectTo: 'Task', pathMatch: 'full' },
  { path: 'Tasks', component: ShowTasksComponent },
  { path: 'add', component: CreateTaskComponent },
  { path: 'update', component: UpdateTaskComponent },
  { path: 'details/:id', component: ReadTaskComponent },
  { path: 'delete', component: DeleteTaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
