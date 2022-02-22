package ttps.spring.model;
import javax.persistence.*;

@Entity
@Table (name="user")
@NamedQuery(name="User.getUser", query="SELECT u FROM User u WHERE u.id = ?1")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private long id;
	
	@Column(name="firstName", nullable=false)
    private String firstName;
	
	@Column(name="lastName", nullable=false)
    private String lastName;
	
	@Column(name="email", nullable=false)
    private String email;
	
	@Column(name="invitationSent", nullable=false)
    private Boolean invitationSent = false;
    
	
	
	public User() {
		super();
	}

	public User(String firstName, String lastName, String email, Boolean invitationSent) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.invitationSent =invitationSent;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getInvitationSent() {
		return invitationSent;
	}

	public void setInvitationSent(Boolean invitationSent) {
		this.invitationSent = invitationSent;
	}
	

}