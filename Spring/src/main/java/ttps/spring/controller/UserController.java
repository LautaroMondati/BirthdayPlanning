package ttps.spring.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ttps.spring.model.User;
import ttps.spring.services.UserService;

@RestController
@RequestMapping("/guests")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping()
    public ArrayList<User> findByInvitationPending(){
        return userService.findByInvitationPending();
    }
    @CrossOrigin(origins = "http://localhost:4200/")
    @PostMapping()
    public User addGuest(@RequestBody User user){
        return this.userService.addGuest(user);
    }
    @CrossOrigin(origins = "http://localhost:4200/")
    @DeleteMapping(path = "/{id}")
    public void deleteById(@PathVariable("id")Long id){
        this.userService.deleteUser(id);
    }
    @CrossOrigin(origins = "http://localhost:4200/")
    @PutMapping(path = "/invite")
    public void sendInvitation(@RequestBody ArrayList<Long> ids){
        this.userService.sendInvitationToUsers(ids);
    }


    @GetMapping(path = "/{id}")
    public Optional<User> findById(@PathVariable("id")Long id){
        return userService.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200/")
    @PutMapping(path = "/{id}")
    public User editGuest(@RequestBody User user){
        return this.userService.addGuest(user);
    }
}