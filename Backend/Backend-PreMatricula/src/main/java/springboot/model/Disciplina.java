package springboot.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "disciplina")
public class Disciplina implements Serializable {

	private static final long serialVersionUID = -10081008326902346L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String nome;

	@Column(nullable = false)
	private String codigo;

	@Column(nullable = false)
	private int numVagas;

	@Column(nullable = false)
	private int numCreditos;

	@Column(nullable = false)
	private int cargaHoraria;

	@Column(nullable = false)
	private Set<String> professores;

	public Disciplina() {

	}

	public Disciplina(String nome, String codigo, int numVagas, int numCreditos, int cargaHoraria,
			Set<String> professores) {
		super();
		this.nome = nome;
		this.codigo = codigo;
		this.numVagas = numVagas;
		this.numCreditos = numCreditos;
		this.cargaHoraria = cargaHoraria;
		this.professores = professores;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public int getNumVagas() {
		return numVagas;
	}

	public void setNumVagas(int numVagas) {
		this.numVagas = numVagas;
	}

	public int getNumCreditos() {
		return numCreditos;
	}

	public void setNumCreditos(int numCreditos) {
		this.numCreditos = numCreditos;
	}

	public int getCargaHoraria() {
		return cargaHoraria;
	}

	public void setCargaHoraria(int cargaHoraria) {
		this.cargaHoraria = cargaHoraria;
	}

	public Set<String> getProfessores() {
		return professores;
	}

	public void setProfessores(Set<String> professores) {
		this.professores = professores;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setId(Long id) {
		this.id = id;
	}
}