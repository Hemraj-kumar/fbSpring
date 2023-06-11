package com.example.fb_backend.Repositry;

import com.example.fb_backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.UUID;

public interface UserRepo extends JpaRepository<User, UUID> {
    ArrayList<User> findAll();
    User save(User user);
}
