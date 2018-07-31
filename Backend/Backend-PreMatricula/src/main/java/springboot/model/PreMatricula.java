package springboot.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "preMatricula")
public class PreMatricula implements Serializable {
	
	private static final long serialVersionUID = 8351453666214520260L;

	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToMany//OneToMany ou ManyToMany????
	@JoinColumn(name = "disciplinaId")
	private Set<Disciplina> disciplinas;

	public PreMatricula() {//Mudei isso
		super();
		this.disciplinas = new HashSet<Disciplina>();
	}
	
	public PreMatricula(HashSet<Disciplina> disciplinas){// e se puder inicializar sem mandar as disciplinas?
		super();
		this.disciplinas = disciplinas;
	}

	public Set<Disciplina> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(Set<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
	}
	
	public int qtdCreditos(){
		int creditos = 0;
		for(Disciplina disciplina : disciplinas){
			creditos += disciplina.getNumCreditos();
		}
		return creditos;	
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public Long getId(){
		return id;
	}
	
	@Override
	public String toString() {
		String result = "Disciplinas: \n";
		for(Disciplina disciplina : disciplinas){
			result += disciplina.toString();
		}
		return result;
	}
}