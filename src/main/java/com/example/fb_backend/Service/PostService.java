package com.example.fb_backend.Service;

import com.example.fb_backend.Model.Post;
import com.example.fb_backend.Repositry.PostRepo;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;
@Service
public class PostService {
    PostRepo postrepo;
    public ArrayList<Post> fetchData(){
        ArrayList<Post> res=(ArrayList<Post>) postrepo.findAll();
        return res;
    }

    public void submitData(Post post){
        post.setPost_id(UUID.randomUUID());
        post.setUser_id(UUID.randomUUID());
        post.setLike(0);

        Date date=new Date();
        long time=date.getTime();
        Timestamp dateTime=new Timestamp(time);

        post.setDateTime(dateTime);

        postrepo.save(post);
//        ArrayList<Post> res=fetchData();
//        return res;
    }

    public ArrayList<Post> deleteData(UUID post_id){
        postrepo.deleteById(post_id);
        ArrayList<Post> res =fetchData();
        return res;
    }
}
