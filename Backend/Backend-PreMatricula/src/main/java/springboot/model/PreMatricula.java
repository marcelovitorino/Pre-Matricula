package springboot.model;
 
import java.io.Serializable;
 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
 
@Entity
@Table(name = "PreMatricula")
public class PreMatricula implements Serializable{
 
    private static final long serialVersionUID = -6603382401958426451L;
 
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//@Column(nullable = false)
    private Long id;
 
    public Long getId() {
        return id;
    }
 
    public void setId(Long id) {
        this.id = id;
    }
 
    @Column(nullable = false)
    private String email;
   
    @Column(nullable = false)
    private Disciplina disciplina;
   
   
    public PreMatricula(){
       
    }
   
    public PreMatricula(String email, Disciplina disciplina) {
        super();
        this.email = email;
        this.disciplina = disciplina;
    }
   
   
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    @OneToOne
    @JoinColumn(name = "PremDisciplina")
    public Disciplina getDisciplina() {
        return disciplina;
    }
 
    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }
 
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
 
}