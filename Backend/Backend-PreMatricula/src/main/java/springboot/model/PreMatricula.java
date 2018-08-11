package springboot.model;
 
import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
 
@Entity
@Table(name = "PreMatricula")
public class PreMatricula implements Serializable{
 
    private static final long serialVersionUID = -6603382401958426451L;
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @ManyToMany
    private Set<Disciplina> disciplinas;
   
   
    public PreMatricula(){
       
    }
   
    public PreMatricula(String email, Set<Disciplina> disciplinas) {
        super();
        this.email = email;
        this.disciplinas = disciplinas;
    }
   
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }

    @JoinColumn(name = "PremDisciplina")
    public Set<Disciplina> getDisciplina() {
        return disciplinas;
    }
 
    public void setDisciplina(Set<Disciplina> disciplinas) {
        this.disciplinas = disciplinas;
    }
 
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
}