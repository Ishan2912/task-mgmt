package com.company.service;

import com.company.model.Task;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface TaskService {
	Flux<Task> getTasks();
	Mono<Task> getTask(Long id);
	Mono<Task> createTask(Task task);
	Mono<Task> updateTask(Task task);
	Mono<Void> deleteTask(Long id);
}
