package com.stackroute.transport.UserAuthetincation.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.transport.UserAuthetincation.exception.UserAlreadyExistException;
import com.stackroute.transport.UserAuthetincation.exception.UserNotFoundException;
import com.stackroute.transport.UserAuthetincation.model.PayLoad;
import com.stackroute.transport.UserAuthetincation.model.User;
import com.stackroute.transport.UserAuthetincation.servicce.UserAuthServiceImpl;
import com.stackroute.transport.UserAuthetincation.util.ChangePass;
import com.stackroute.transport.UserAuthetincation.util.LoginUtil;
import com.stackroute.transport.UserAuthetincation.util.TokenUtil;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin
@RestController
@RequestMapping("/userdetails")
public class UserAuthController {

	@Autowired
	UserAuthServiceImpl service;
	
	@Autowired
    private TokenUtil tokenUtil;

	public UserAuthController() {

	}

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		try {
			service.saveUser(user);
			user.setPassword(null);
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		} catch (UserAlreadyExistException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginUtil user) {
		try {
			User userDB = service.findByEmailAndPassword(user.getEmail(), user.getPassword());
			userDB.setPassword(null);
			PayLoad payload = new PayLoad();
			payload.setToken(getToken(user.getEmail(), user.getPassword()));
			payload.setUser(userDB);
			return new ResponseEntity<PayLoad>(payload, HttpStatus.OK);
		} catch (UserNotFoundException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		}
	}
	
	@GetMapping("/byusername/{username}")
    public User getUserByUsername(@PathVariable String username) throws Exception {
        User response = service.findUserDetailsByUsername(username);
        return response;
    }
	
	
	
	@PutMapping("/updatepass/{username}")
	public User changePassword(@PathVariable String username, @RequestBody String newPassword) throws Exception {
       System.out.println(newPassword);
//       String newPass=newPassword.getNewPassword();
		User response = service.updatePassword(username, newPassword);
        	return response;
    }
	
	@PutMapping("/updateusername/{username}")
	public User changeUserName(@PathVariable String username, @RequestBody String newUsername) throws Exception {
       System.out.println(newUsername);
//       String newPass=newPassword.getNewPassword();
		User response = service.updateUserName(username, newUsername);
        	return response;
    }
	
	

	public String getToken(String id, String password) throws Exception {
		
		
		return tokenUtil.generateToken(id);

	}
}
