package ttps.spring.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ttps.spring.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
		
	
	public User getUser(Long id);
	
	
	public Optional<User> findById(Long id);
	
	public abstract ArrayList<User> findByInvitationSent(Boolean invitationSent);

}