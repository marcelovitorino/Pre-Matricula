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
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "preMatricula")
public class PreMatricula implements Serializable {
	
	private static final long serialVersionUID = 8351453666214520260L;

	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private Aluno aluno;
	
	//@OneToMany
	//@JoinTable(name = "preMatricula_Disciplina", 
	//joinColumns = @JoinColumn(name = "preMatricula_id", referencedColumnName = "id"),
	//inverseJoinColumns = @JoinColumn(name = "Disciplina_id", referencedColumnName = "id"))
	@OneToMany //---------------OneToMany ou ManyToMany????
	@JoinColumn(name = "disciplinaId")
	private Set<Disciplina> disciplinas;

	public PreMatricula() {//Mudei isso
		super();
		this.disciplinas = new HashSet<Disciplina>();
	}
	
	public PreMatricula(HashSet<Disciplina> disciplinas, Aluno aluno){// e se puder inicializar sem mandar as disciplinas?
		super();
		this.disciplinas = disciplinas;
		this.aluno = aluno;
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
	
	@OneToOne(mappedBy = "preMatricula")
	public Aluno getAluno(){
		return aluno;
	}
	
	public void setAluno(Aluno aluno){
		this.aluno = aluno;
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