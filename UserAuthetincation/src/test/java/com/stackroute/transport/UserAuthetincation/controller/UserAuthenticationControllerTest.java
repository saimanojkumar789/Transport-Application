package com.stackroute.transport.UserAuthetincation.controller;



import java.sql.Date;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.transport.UserAuthetincation.model.User;
import com.stackroute.transport.UserAuthetincation.repository.UserRepository;
import com.stackroute.transport.UserAuthetincation.servicce.UserAuthServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = "classpath:app-context.xml")
@WebMvcTest(controllers=UserAuthController.class)
public class UserAuthenticationControllerTest {
	@Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserAuthServiceImpl authenticationService;
    @MockBean
    private UserRepository repository;
    
    private User user;

    @InjectMocks
    private UserAuthController authenticationController;


    @SuppressWarnings("deprecation")
	@Before
    public void setUp() throws Exception {

        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup (authenticationController).build();

        user = new User();
        user.setUserName("Mack");
        user.setEmail("mack@gmail.com");
        user.setPassword("123456");
    }

    @Test
    public void testRegisterUser() throws Exception {

    	Mockito.when(authenticationService.saveUser(user)).thenReturn(true);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/auth/register")
        		.contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(user)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());
    }


    @Test
    public void testLoginUser() throws Exception {


        String email = "mack@gmail.com";
        String password = "123456";


        Mockito.when(authenticationService.saveUser(user)).thenReturn(true);
        Mockito.when(authenticationService.findByEmailAndPassword(email, password)).thenReturn(user);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/auth/login")
        		.contentType(MediaType.APPLICATION_JSON)
        		.content(jsonToString(user)))
        		.andExpect(MockMvcResultMatchers.status().isOk()).andDo(MockMvcResultHandlers.print());
    }
    private static String jsonToString(final Object obj) throws JsonProcessingException {
        String result;
        try {
            final ObjectMapper mapper = new ObjectMapper();
            final String jsonContent = mapper.writeValueAsString(obj);
            result = jsonContent;
        } catch (JsonProcessingException e) {
            result = "Json processing error";
        }
        return result;
    }

}
