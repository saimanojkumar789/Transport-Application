package com.favorite.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("favorite")
public class Favorite {
	@Id
	private String id;
	private String source;
	private String username;
	private String destination;
	public Favorite() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Favorite(String source, String username, String destination) {
		super();

		this.source = source;
		this.username = username;
		this.destination = destination;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	
}
