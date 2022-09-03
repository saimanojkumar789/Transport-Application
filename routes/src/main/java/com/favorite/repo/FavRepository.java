package com.favorite.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.favorite.entity.Favorite;

public interface FavRepository extends MongoRepository<Favorite, String> {
	List<Favorite> findByUsername(String username);
//	void deleteByDestinationAndSource(String source, String destination);
}
