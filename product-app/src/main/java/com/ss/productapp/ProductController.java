package com.ss.productapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost")
public class ProductController {

	@Autowired
	private ProductRepo prodRepo;
	
	@RequestMapping("/all")
	public List<Product> getProducts() {
		return prodRepo.findAll();
	}
	
	@RequestMapping("/delete/{pid}")
	public void deleteProduct(@PathVariable String pid) {
		prodRepo.delete(Integer.valueOf(pid));
	}
	
	@RequestMapping("/get/{pid}")
	public Product getProduct(@PathVariable String pid) {
		return prodRepo.findOne(Integer.valueOf(pid));
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public void addProduct(@RequestBody Product newProduct) {
		System.out.println(newProduct);
		prodRepo.save(newProduct);
	}
	
}
