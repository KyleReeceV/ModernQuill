package com.mq.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.mq.entities.Pen;

public interface PenRepository extends CrudRepository<Pen,Integer>{
	List<Pen> findByName(String name);
	
	List<Pen> findByCost(int cost);
}
