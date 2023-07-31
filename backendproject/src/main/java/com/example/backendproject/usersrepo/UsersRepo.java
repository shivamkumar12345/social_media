package com.example.backendproject.usersrepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.backendproject.Users.Users;

@Repository
public interface UsersRepo extends CrudRepository<Users, Integer>  {
	Users save(Users user);
	Users findById(int userid);
}
