package com.company.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.company.model.Task;
import com.company.repository.TaskRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	TaskRepository taskRepository;

	@Autowired
	NextSequenceService nextSequenceService;

	public Flux<Task> getTasks() {
		return taskRepository.findAll();
	}

	public Mono<Task> getTask(Long id) {
		return taskRepository.findById(id);
	}

	public Mono<Task> createTask(Task task) {
		task.setId(nextSequenceService.getNextSequence("customSequences"));
		return taskRepository.save(task);

	}

	public Mono<Task> updateTask(final Task task) {

		return taskRepository.findById(task.getId()).flatMap(existingtask -> {
			existingtask.setName(task.getName());
			existingtask.setDescription(task.getDescription());
			existingtask.setDuration(task.getDuration());
			return taskRepository.save(existingtask);
		});
	}

	public Mono<Void> deleteTask(Long id) {
		return taskRepository.deleteById(id);

	}

}
