import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  task: Task = new Task();
  submitted: boolean;

  ngOnInit() {
  }

  saveTask() {
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoTaskList();
  }

  onSubmit() {
    this.saveTask();    
  }

  gotoTaskList() {
    this.router.navigate(['/tasks']);
  }

}
