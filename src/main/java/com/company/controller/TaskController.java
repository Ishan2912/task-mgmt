package com.company.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.model.Task;
import com.company.service.TaskService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TaskController {

	private static final Logger logger = LoggerFactory.getLogger(TaskController.class);

	@Autowired
	private TaskService taskService;

	@GetMapping("/tasks")
	Flux<Task> getTasks() {
		return taskService.getTasks();
	}

	@PostMapping("/task")
	Mono<Task> postTask(@Valid @RequestBody Task task) {
		return taskService.createTask(task);
	}

	@GetMapping("/task/{id}")
	public Mono<Task> getTaskById(@PathVariable(value = "id") Long taskId) {
		return taskService.getTask(taskId);
	}

	@RequestMapping(value = "/task", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
	public Mono<Task> updateTask(@Valid @RequestBody Task task) {
		return taskService.updateTask(task);
	}

	@DeleteMapping("/task/{id}")
	public Mono<Void> deleteTask(@PathVariable(value = "id") Long taskId) {
		return taskService.deleteTask(taskId);
	}
}
