package com.ss.productapp;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {

	public Product() {}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String description;
	private Date purdate;
	private int quantity;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getPurdate() {
		return purdate;
	}
	public void setPurdate(Date purdate) {
		this.purdate = purdate;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", desc=" + description + ", purdate=" + purdate + ", quantity=" + quantity + "]";
	}
	
	

}
