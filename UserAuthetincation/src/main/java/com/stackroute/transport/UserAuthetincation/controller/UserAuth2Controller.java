package com.stackroute.transport.UserAuthetincation.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.transport.UserAuthetincation.model.User;
import com.stackroute.transport.UserAuthetincation.servicce.UserAuthServiceImpl;

@RequestMapping("/users")
@RestController
public class UserAuth2Controller {
	
	@Autowired
	UserAuthServiceImpl service;
	
	@GetMapping("/byusername/{username}")
    public User getUserByUsername(HttpServletRequest request, @PathVariable String username) throws Exception {
        User response = service.findUserDetailsByUsername(username);
        return response;
    }

}
