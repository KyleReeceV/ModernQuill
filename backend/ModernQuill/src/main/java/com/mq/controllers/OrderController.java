package com.mq.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mq.entities.Order;
import com.mq.services.OrderService;

@Component
@RestController
public class OrderController {

	@Autowired
	OrderService oServ;
	
	
	@RequestMapping (value = "/orders", method =  RequestMethod.POST)
	public Order createOrder(@RequestBody Order order) {
		
		return oServ.createOrder(order);
	}
	
	
}
