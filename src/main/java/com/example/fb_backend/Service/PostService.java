package com.example.fb_backend.Service;

import com.example.fb_backend.Model.Post;
import com.example.fb_backend.Repositry.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;
@Service
public class PostService {
    @Autowired
    PostRepo postrepo;
    public ArrayList<Post> fetchData(){
        ArrayList<Post> res=(ArrayList<Post>) postrepo.findAll();
        return res;
    }

    public ArrayList<Post >submitData(Post post){
        post.setPost_id(UUID.randomUUID());
        post.setUser_id(UUID.randomUUID());
        post.setLike(0);
        post.setTimestamp(LocalDateTime.now());

        postrepo.save(post);
        return fetchData();
    }

    public ArrayList<Post> deleteData(UUID post_id){
        postrepo.deleteById(post_id);
        return fetchData();
    }
}
