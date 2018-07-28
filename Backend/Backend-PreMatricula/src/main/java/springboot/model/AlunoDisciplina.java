package springboot.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "alunoDisciplina")
public class AlunoDisciplina implements Serializable {

	private static final long serialVersionUID = -4093144802490458667L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String matriculaAluno;

	//@ForeignKey
	@Column(nullable = false)
	private Long disciplinaId;

	public AlunoDisciplina() {

	}

	public AlunoDisciplina(String matriculaAluno, Long disciplinaId) {
		super();
		this.matriculaAluno = matriculaAluno;
		this.disciplinaId = disciplinaId;
	}

	public String getMatriculaAluno(){
		return matriculaAluno;
	}
	
	public void setMatriculaAluno(String matriculaAluno){
		this.matriculaAluno = matriculaAluno;
	}
	
	public Long getDisciplinaId(){
		return disciplinaId;
	}
	
	public void setDisciplinaId(Long disciplinaId){
		this.disciplinaId = disciplinaId;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public Long getId(){
		return id;
	}
	
	//Realmente necessario?
	public void setId(Long id) {
		this.id = id;
	}
	
}