package com.example.backendproject.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backendproject.Users.Identity;
import com.example.backendproject.services.IdentityService;

@RestController
@RequestMapping("/identity")
@CrossOrigin(origins="http://localhost:3000")
public class IdentityController {
	
	@Autowired
	private IdentityService identityservice;
	
	@GetMapping("/user/{userid}/{password}")
	public boolean verifyIdentity(@PathVariable("userid") String userid, @PathVariable("password") String password) {
		Optional<Identity> info = identityservice.getInfo(userid);
		if(info.isPresent()) {
			Identity temp = info.get();
			return temp.getUserId() == userid && temp.getUserPassword() == password;
		}
		return false;
	}
	@PostMapping("")
	public Identity submitIdentity(@RequestBody Identity identity) {
		return identityservice.saveInfo(identity);
	}
	
	@GetMapping("/exist/{userid}")
	public boolean isIdentityExist( @PathVariable("userid") String userid) {
		return identityservice.isIdentityExist(userid);
	}
	
	
}
