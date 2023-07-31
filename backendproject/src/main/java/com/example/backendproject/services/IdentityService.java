package com.example.backendproject.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backendproject.Users.Identity;
import com.example.backendproject.usersrepo.IdentityRepo;

@Service
public class IdentityService {
	
	@Autowired
	private IdentityRepo identityrepo;
	
	public Identity saveInfo(Identity info) {
		return identityrepo.save(info);
	}
	public Optional<Identity> getInfo(String userId) {
		return identityrepo.findById(userId);
	}
	public boolean isIdentityExist(String userid) {
		return identityrepo.existsById(userid);
	}
}
