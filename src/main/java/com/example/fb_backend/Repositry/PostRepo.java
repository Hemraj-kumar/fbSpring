package com.example.fb_backend.Repositry;

import com.example.fb_backend.Entity.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface PostRepo extends MongoRepository<Post, UUID> {
    //overriding methods(changing the return type of actual methods

}
