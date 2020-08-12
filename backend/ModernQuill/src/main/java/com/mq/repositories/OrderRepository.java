package com.mq.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.mq.entities.Order;

@Component
@Repository 
public interface OrderRepository extends CrudRepository<Order , Integer> {

}
