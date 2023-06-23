package com.example.fb_backend.Controller;

import com.example.fb_backend.Model.User;
import com.example.fb_backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@RestController
//@RequestMapping("/userService")
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping("/saveData")
    public ArrayList<User> submitUserData(@RequestBody User user){
        ArrayList<User> arr=userService.sendData(user);
        return arr;
    }

    @GetMapping("/getUser")
    public ArrayList<User> getUserData(){
        ArrayList<User> arr=userService.getData();
        return arr;
    }

    @DeleteMapping("/deleteUser/{user_id}")
    public ArrayList<User> deleteUser(@PathVariable("user_id")UUID uuid){
        ArrayList<User> arr=userService.delete(uuid);
        return arr;
    }

//    @PutMapping("/updateUser/{user_id}")
//    public ResponseEntity<User> update(@PathVariable("user_id") UUID uuid){
//        return new ResponseEntity<User>(UserService.UserUpdate(uuid),HttpStatus.OK);
//    }
}
