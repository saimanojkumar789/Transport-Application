package com.stackroute.transport.UserAuthetincation.util;

public class LoginUtil {

	private String email;
	private String password;
	public LoginUtil() {
		super();
		// TODO Auto-generated constructor stub
		
	}
	public LoginUtil(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
