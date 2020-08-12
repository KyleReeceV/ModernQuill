package com.mq.controllers;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mq.entities.Customer;

@Component
@RestController
public class LoginController {

	@RequestMapping(value="/login",method= RequestMethod.GET)
	public Customer login() {
		return null;
	}
	
	@RequestMapping(value="/getUserInfo", method=RequestMethod.GET)
	public Customer userInfo() {
		return null;
	}
	
}
