package com.mq.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="cust_order")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "o_id")
	private int oId;
	

	@Column(name = "t_id")
	private int cId;
	
	@Column(name = "p_id")
	private int pId;
	
	@Column(name = "quantity")
	private int quantity;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Order(int oId, int cId, int pId, int quantity) {
		super();
		this.oId = oId;
		this.cId = cId;
		this.pId = pId;
		this.quantity = quantity;
	}




	public int getoId() {
		return oId;
	}

	public void setoId(int oId) {
		this.oId = oId;
	}

	public int getcId() {
		return cId;
	}

	public void setcId(int cId) {
		this.cId = cId;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Order [oId=" + oId + ", cId=" + cId + ", pId=" + pId + ", quantity=" + quantity + "]";
	}
	
	
	
}
