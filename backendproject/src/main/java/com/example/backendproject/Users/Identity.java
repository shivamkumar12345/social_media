package com.example.backendproject.Users;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity(name="Identity")
public class Identity {
	
	@Id
	@Nonnull
	private String userId;
	@Nonnull
	private String userName;
	@Nonnull
	private String userPassword;
	private String userProfile;
	
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public Identity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Identity(String userId, String userName, String userPassword, String userProfile) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userProfile = userProfile;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserProfile() {
		return userProfile;
	}
	public void setUserProfile(String userProfile) {
		this.userProfile = userProfile;
	}
	
	
}
