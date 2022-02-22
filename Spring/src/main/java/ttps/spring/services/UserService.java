package ttps.spring.services;

import java.util.ArrayList;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ttps.spring.model.User;
import ttps.spring.repositories.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	public User addGuest(User user){
        return userRepository.save(user);
    }


	public User getUser(Long id){
		return userRepository.getUser(id);
		}
	
	
	@Transactional
	public Optional<User> findById(Long id) {
		return userRepository.findById(id);
	}

	public ArrayList<User> findByInvitationPending(){
        return (ArrayList<User>) userRepository.findByInvitationSent(false);
    }

	public boolean deleteUser(Long id){
        try{
            userRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

	public void sendInvitationToUsers( ArrayList<Long> ids) {
        for (Long id : ids){
			User current = userRepository.getUser(id);
			current.setInvitationSent(true);
			userRepository.save(current);
		}
    }
	
}