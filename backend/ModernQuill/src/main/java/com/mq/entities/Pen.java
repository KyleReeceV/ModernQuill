package com.mq.entities;


public class Pen {

	private int pId;
	private String description;
	private String name; 
	private int cost;
	private String image;
	
	public Pen() {
		super();
	}
	public Pen(int pId, String description, String name, int cost, String image) {
		super();
		this.pId = pId;
		this.description = description;
		this.name = name;
		this.cost = cost;
		this.image = image;
	}
	
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	@Override
	public String toString() {
		return "Pen [pId=" + pId + ", description=" + description + ", name=" + name + ", cost=" + cost + ", image="
				+ image + "]";
	}
		
	
	
}
