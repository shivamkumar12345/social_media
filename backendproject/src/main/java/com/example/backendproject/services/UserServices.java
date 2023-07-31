package com.example.backendproject.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

import com.example.backendproject.Users.Users;
import com.example.backendproject.usersrepo.UsersRepo;

@Service
public class UserServices {
	
	ArrayList<Users> userInfo = new ArrayList();
	
	@Autowired
	//@Qualifier("UsersRepo")
	UsersRepo usersrepo;
	
	public Users submitUsers(Users user) {
		return usersrepo.save(user);
	}
	public Users getUsers(int userId) {
		return usersrepo.findById(userId);
	}
	public ArrayList<Users> getAllPosts(){
		userInfo = (ArrayList<Users>) usersrepo.findAll();
		return userInfo;
	}
	public Users addFavorite(int userid, boolean fav) {
		Users  cur = getUsers(userid);
		cur.setFavorite(fav);
		usersrepo.save(cur);
		return cur;
	}
}
