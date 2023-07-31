package com.example.backendproject.usersrepo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.backendproject.Users.Identity;

@Repository
public interface IdentityRepo  extends CrudRepository<Identity, String> {

}
