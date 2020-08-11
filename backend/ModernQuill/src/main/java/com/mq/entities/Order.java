package com.mq.entities;

public class Order {

	private long oId;
	private long cId;
	private long pId;
	
	private int quantity;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Order(long oId, long cId, long pId, int quantity) {
		super();
		this.oId = oId;
		this.cId = cId;
		this.pId = pId;
		this.quantity = quantity;
	}




	public long getoId() {
		return oId;
	}

	public void setoId(long oId) {
		this.oId = oId;
	}

	public long getcId() {
		return cId;
	}

	public void setcId(long cId) {
		this.cId = cId;
	}

	public long getpId() {
		return pId;
	}

	public void setpId(long pId) {
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
