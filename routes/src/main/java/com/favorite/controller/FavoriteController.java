package com.favorite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.favorite.entity.Favorite;
import com.favorite.service.FavoriteService;


@RestController
@CrossOrigin
@RequestMapping("/favourites")
public class FavoriteController {
	@Autowired
	private FavoriteService favoriteService;
	
	@GetMapping("/{username}")
	public List<Favorite> getAllFavorite(@PathVariable String username){
		return favoriteService.getFavoriteList(username);
	}
	@PostMapping("/favorite")
	public Favorite favorite(@RequestBody Favorite favorite) {
			return favoriteService.favorite(favorite);
	}
	
//	@DeleteMapping("/delete/fav")
//	public void deleteFavorite(@RequestBody Favorite favorite) {
//		favoriteService.deleteFavorite(favorite);
//	}	
}
