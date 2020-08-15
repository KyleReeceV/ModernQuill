package com.mq.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mq.entities.Cart;
import com.mq.repositories.CartRepository;

@Service
public class CartServiceImpl implements CartService{

	@Autowired
	CartRepository cr;
	
	@Override
	public Cart createCart(Cart cart) {
		
		return cr.save(cart);
	}
	
	/*
	 * no get by customer id, we don't care about what items he bought, 
	 * we just need to group the stuff he bought with the cart it;
	 */

	@Override
	public Set<Cart> getAllCartItemsByCartId(int cartId) {
		return cr.findBycartId(cartId);
	}

	@Override
	public int getLastElementId() {
		return cr.findTopByOrderByCartIdDesc().getCartId();
	}

}
