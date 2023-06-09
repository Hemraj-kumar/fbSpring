package com.example.fb_backend.Service;

import com.example.fb_backend.Entity.Post;
import com.example.fb_backend.Repositry.PostRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;
@Service
public class PostService {
    PostRepo postrepo;
    public ArrayList<Post> fetchData(){
        ArrayList<Post> res= (ArrayList<Post>) postrepo.findAll();
        return res;
    }

    public ArrayList<Post> submitData(Post post){
        postrepo.save(post);
        ArrayList<Post> res=fetchData();
        return res;
    }

    public ArrayList<Post> deleteData(UUID uuid){
        postrepo.deleteById(uuid);
        return fetchData();
    }
}
