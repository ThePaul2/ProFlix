package com.ecinema.springboot.ecinema.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ecinema.springboot.ecinema.springboot.model.Users;
import com.ecinema.springboot.ecinema.springboot.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Get all users
    @GetMapping
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    // Get a user by ID
    @GetMapping("/{id}")
    public Users getUserById(@PathVariable String id) {
        return userRepository.findById(id).orElse(null);
    }

    // Add a new user
    @PostMapping
    public Users addUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    // Update a user
    @PutMapping("/{id}")
    public Users updateUser(@PathVariable String id, @RequestBody Users userDetails) {
        userDetails.setId(id);
        return userRepository.save(userDetails);
    }

    // Delete a user
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
    }
}
