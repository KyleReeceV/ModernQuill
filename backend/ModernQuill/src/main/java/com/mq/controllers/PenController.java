package com.mq.controllers;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mq.entities.Pen;


@Component
@Controller
public class PenController {

	
	
	@RequestMapping(value="/pens", method = RequestMethod.GET)
	@ResponseBody
	public List<Pen> getAllPens(){
		return null;
	}
	
	@RequestMapping(value="/pens/{pid}", method = RequestMethod.GET)
	@ResponseBody
	public Pen getPenById(@PathVariable int pid){
		return null;
	}
	
	
	
	
}
