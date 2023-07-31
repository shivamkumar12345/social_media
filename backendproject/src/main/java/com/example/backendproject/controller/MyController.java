package com.example.backendproject.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendproject.Users.Users;
import com.example.backendproject.services.UserServices;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
public class MyController {
	
	@Autowired
	UserServices userservice;
	
	@GetMapping("/home")
	public String getApi() {
		return "ok";
	}
	
	@PostMapping("")
	public Users submitUserInfo(@RequestBody Users user) {
		Users info = userservice.submitUsers(user);
		return info;
	}
	@GetMapping("/{postid}")
	public Users getUserInfo(@PathVariable("postid") Integer id) {
		Users info = userservice.getUsers(id);
		return info;
	}
	@GetMapping("/allpost")
	public ArrayList<Users> getAllPost(){
		return userservice.getAllPosts();
	}
	@PutMapping("addfav/{postid}/{favorite}")
	public Users addFavorite(@PathVariable("postid") Integer id, @PathVariable("favorite") boolean fav){
		System.out.println(id);
		return userservice.addFavorite(id, fav);	
	}
	
}
