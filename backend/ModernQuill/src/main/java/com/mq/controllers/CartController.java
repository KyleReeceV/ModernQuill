package com.mq.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mq.entities.Cart;
import com.mq.services.CartService;

@RestController
public class CartController {

	
	@Autowired
	CartService cServ;
	
	@PostMapping ("/carts")
	public Cart createCart(@RequestBody Cart cart) {
		System.out.println(cart);
		return cServ.createCart(cart);
	}
	
	//Set <Cart> getAllByCartId(int cartId);
	@GetMapping("/carts/{cartId}")
	public Set<Cart> getAllCartItemsByCartId(@PathVariable Integer cartId) {
		return cServ.getAllCartItemsByCartId(cartId);
		
	}
	//int getLastElementId();
	@GetMapping("/carts/last-element")
	public Integer getLastElement() {
		return cServ.getLastElementId();
	}
	
}
