package springboot.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin implements Serializable{

	private static final long serialVersionUID = 3008305823819503655L;
	
	@Id
	@Column(nullable = false)
	private Long id;
	
	@Column(nullable = false)
	private String email;
	
	public Admin(){
		
	}
	
	public Admin(String email) {
		super();
		this.email = email;
	}
	
	public String getEmail(){
		return email;
	}
	
	public void setEmail(String email){
		this.email = email;
	}
	
	public Long getId(){
		return id;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
