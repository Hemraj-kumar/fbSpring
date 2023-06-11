package com.example.fb_backend.Service;

import com.example.fb_backend.Model.User;
import com.example.fb_backend.Repositry.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public ArrayList<User> getData(){
        ArrayList<User> arr=userRepo.findAll();
        return arr;
    }

    public ArrayList<User> sendData(User user){
        user.setUser_id(UUID.randomUUID());
        user.setDate(LocalDateTime.now());
        userRepo.save(user);

        return getData();
    }

    public ArrayList<User> delete(UUID uuid){
        userRepo.deleteById(uuid);
        return getData();
    }
}
