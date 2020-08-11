package com.mq.entities;

public class Order {

	private int oId;
	private int cId;
	private int pId;
	
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
