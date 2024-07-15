import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.fetchTaskList();
  }

  fetchTaskList() {
    this.tasks = this.taskService.getTaskList();
  }

  deleteProduct(id: number) {
    this.taskService.deleteTask(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchTaskList();
        },
        error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(task: Task){
    this.router.navigate(['update', task]);
  }
}
