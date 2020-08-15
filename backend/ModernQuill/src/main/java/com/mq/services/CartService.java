package com.mq.services;

import java.util.Set;

import com.mq.entities.Cart;

public interface CartService {

	Cart createCart(Cart cart);
	

	Set <Cart> getAllCartItemsByCartId(int cartId);
	
	int getLastElementId();
}
