package com.mq.entities;

public class Customer {

	private int cId;
	private String fname;
	private String lname;
	private String email;
	private String password;
	
	private int points;

	public Customer(int cId, String fname, String lname, String email, String password, int points) {
		super();
		this.cId = cId;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.points = points;
	}
	
	

	public Customer() {
		super();
	}

	public int getC_id() {
		return cId;
	}

	public void setC_id(int cId) {
		this.cId = cId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	@Override
	public String toString() {
		return "Customer [cId=" + cId + ", fname=" + fname + ", lname=" + lname + ", email=" + email + ", password="
				+ password + ", points=" + points + "]";
	}
	
	
	
}
