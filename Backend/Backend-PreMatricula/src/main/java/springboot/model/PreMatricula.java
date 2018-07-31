package springboot.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "preMatricula")
public class PreMatricula implements Serializable {
	
	private static final long serialVersionUID = 8351453666214520260L;

	@Id
	@Column(nullable = false)
	private String alunoEmail;
	
	//@OneToMany
	//@JoinTable(name = "preMatricula_Disciplina", 
	//joinColumns = @JoinColumn(name = "preMatricula_id", referencedColumnName = "id"),
	//inverseJoinColumns = @JoinColumn(name = "Disciplina_id", referencedColumnName = "id"))
	@OneToMany //---------------OneToMany ou ManyToMany????
	@JoinColumn(name = "disciplinaCodigos")
	private Set<String> disciplinasCodigos;

	public PreMatricula() {//Mudei isso
		super();
		this.disciplinasCodigos = new HashSet<String>();
	}
	
	public PreMatricula(HashSet<String> disciplinas, String alunoEmail){// e se puder inicializar sem mandar as disciplinas?
		super();
		this.disciplinasCodigos = disciplinas;
		this.alunoEmail = alunoEmail;
	}

	public Set<String> getDisciplinas() {
		return disciplinasCodigos;
	}

	public void setDisciplinas(Set<String> disciplinas) {
		this.disciplinasCodigos = disciplinas;
	}
	
	/*//Isso vai ser função do controlador de disciplinas
	public int qtdCreditos(){
		int creditos = 0;
		for(Disciplina disciplina : disciplinasCodigos){
			creditos += disciplina.getNumCreditos();
		}
		return creditos;	
	}*/
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

	@OneToOne(mappedBy = "preMatricula")
	public String getAluno(){
		return alunoEmail;
	}
	
	public void setAluno(String alunoEmail){
		this.alunoEmail = alunoEmail;
	}
}