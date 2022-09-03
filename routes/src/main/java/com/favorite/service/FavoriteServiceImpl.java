package com.favorite.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.favorite.entity.Favorite;
import com.favorite.repo.FavRepository;

@Service
public class FavoriteServiceImpl implements FavoriteService {
	@Autowired
	private FavRepository favRepository;
	@Override
	public List<Favorite> getFavoriteList(String username) {
		return favRepository.findByUsername(username);
	}
	@Override
	public Favorite favorite(Favorite favorite) {
		List<Favorite> favorites = favRepository.findByUsername(favorite.getUsername());
		for(Favorite fav: favorites) {
			if(fav.getUsername().equals(favorite.getUsername()) && fav.getSource().equals(favorite.getSource()) && fav.getDestination().equals(favorite.getDestination())) {
				return favorite;
			}
		}
		favRepository.save(favorite);
		return favorite;
	}
//	@Override
//	public void deleteFavorite(Favorite favorite) {
//		List<Favorite> favorites = favRepository.findByUsername(favorite.getUsername());
//		for (Favorite fav : favorites) {
//			if (fav.getUsername().equals(favorite.getUsername()) && fav.getSource().equals(favorite.getSource()) && fav.getDestination().equals(favorite.getDestination())) {
//				favRepository.delete(fav);
//			}
////		favRepository.deleteByDestinationAndSource(fav.getSource(),fav.getDestination());
//		}
//	}
}
