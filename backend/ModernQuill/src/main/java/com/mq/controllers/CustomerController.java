package com.mq.controllers;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mq.entities.Customer;

@Component
@Controller
public class CustomerController {
	
	@RequestMapping(value = "/customers/{cid}", method = RequestMethod.GET)
	@ResponseBody
	public Customer getCustomerbyId(@PathVariable int cid) {
		return null; // do implementation later
	}
	
}
