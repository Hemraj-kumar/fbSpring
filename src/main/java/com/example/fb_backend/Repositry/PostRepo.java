package com.example.fb_backend.Repositry;

import com.example.fb_backend.Model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface PostRepo extends MongoRepository<Post, UUID> {
    //overriding the actual methods
    ArrayList<Post> findAll();  //return type followed by method name
}
