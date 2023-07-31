package com.example.backendproject.Users;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity(name="Users")
public class Users {
	
	@Id
	@GeneratedValue
	private int id;
	
	@Nonnull
	private int userId;
	private String userName;
	private String userProfile;
	private boolean favorite;
	private String comment;
	private String postType;
	private String postImage;
	private String aspectRatio;
	
	
	public String getAspectRatio() {
		return aspectRatio;
	}
	public void setAspectRatio(String aspectRatio) {
		this.aspectRatio = aspectRatio;
	}
	public Users(int id, int userId, String userName, String userProfile, boolean favorite, String comment,
			String postType, String postImage, String aspectRatio) {
		super();
		this.id = id;
		this.userId = userId;
		this.userName = userName;
		this.userProfile = userProfile;
		this.favorite = favorite;
		this.comment = comment;
		this.postType = postType;
		this.postImage = postImage;
		this.aspectRatio = aspectRatio;
	}
	public String getPostType() {
		return postType;
	}
	public void setPostType(String postType) {
		this.postType = postType;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	public boolean isFavorite() {
		return favorite;
	}
	public void setFavorite(boolean favorite) {
		this.favorite = favorite;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
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
	public String getPostImage() {
		return postImage;
	}
	public void setPostImage(String postImage) {
		this.postImage = postImage;
	}
	
}
