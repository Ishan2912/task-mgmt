package com.company.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.company.model.Task;

@Repository
public interface TaskRepository extends ReactiveMongoRepository<Task, Long> {
	

}
