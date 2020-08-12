package com.mq.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.mq.entities.Customer;

@Component
@Repository 
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	
	List<Customer> findByEmail(String email);
}
