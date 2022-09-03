package com.favorite.service;

import java.util.List;

import com.favorite.entity.Favorite;

public interface FavoriteService {
	public List<Favorite> getFavoriteList(String username);
	public Favorite favorite(Favorite favorite);
//	public void deleteFavorite(Favorite fav);
}
