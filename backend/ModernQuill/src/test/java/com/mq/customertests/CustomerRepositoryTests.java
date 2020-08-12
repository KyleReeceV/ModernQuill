package com.mq.customertests;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.mq.entities.Customer;
import com.mq.repositories.CustomerRepository;

import javax.transaction.Transactional;


@SpringBootTest
@Transactional
class CustomerRepositoryTests {

	@Autowired
	CustomerRepository cr;
	
	@Test
	void getCustomerById() {
		Customer c = cr.findById(1).get();
		Assertions.assertEquals("penguy37@gmail.com", c.getEmail());
	}

}
