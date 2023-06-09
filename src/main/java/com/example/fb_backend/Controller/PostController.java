package com.example.fb_backend.Controller;

import com.example.fb_backend.Entity.Post;
import com.example.fb_backend.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@RestController
@RequestMapping("/postService")
public class PostController {
    @Autowired
    PostService postService;
    @GetMapping("/getPosts")
    public ArrayList<Post> getData(){
        ArrayList<Post> res=postService.fetchData();
        return res;
    }
    @PostMapping("/savePosts")
    public ArrayList<Post> submitPost(@RequestBody Post post){
        ArrayList<Post> res=postService.submitData(post);
        return res;
    }

    @DeleteMapping("/deletePosts")
    public ArrayList<Post> deletePosts(@PathVariable("post_id") UUID post_id){
        ArrayList<Post> res=postService.deleteData(post_id);
        return res;
    }
}
