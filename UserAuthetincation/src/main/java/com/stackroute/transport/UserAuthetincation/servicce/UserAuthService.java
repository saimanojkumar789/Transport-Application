package com.stackroute.transport.UserAuthetincation.servicce;

import com.stackroute.transport.UserAuthetincation.exception.UserAlreadyExistException;
import com.stackroute.transport.UserAuthetincation.exception.UserNotFoundException;
import com.stackroute.transport.UserAuthetincation.model.User;

public interface UserAuthService {

	public User findByEmailAndPassword(String email, String password) throws UserNotFoundException;

    boolean saveUser(User user) throws UserAlreadyExistException;
    
    User updatePassword(String newpassword) throws UserNotFoundException;
}
