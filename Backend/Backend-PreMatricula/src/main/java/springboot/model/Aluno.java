package springboot.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "aluno")
public class Aluno implements Serializable {

	private static final long serialVersionUID = 6194388355522784427L;

	@Id
	@Column(nullable = false)
	private String matricula;
	
	@Column(nullable = false)
	private String nome;

	@Column(nullable = false)
	private String email;

	@Column(nullable = false)
	private String periodoEntrada;
	
	public Aluno(){
		
	}
	
	public Aluno(String matricula, String nome,  String email, String periodoEntrada, int idPreMatricula) {
		super();
		this.matricula = matricula;
		this.nome = nome;
		this.email = email;
		this.periodoEntrada = periodoEntrada;
	}
	
	public String getMatricula(){
		return matricula;
	}
	
	public void setMatricula(String matricula){
		this.matricula = matricula;
	}
	
	public String getNome(){
		return nome;
	}
	
	public void setNome(String nome){
		this.nome = nome;
	}
	
	public String getEmail(){
		return email;
	}
	
	public void setEmail(String email){
		this.email = email;
	}
	
	public String getPeriodoEntrada(){
		return periodoEntrada;
	}
	
	public void setPeriodoEntrada(String periodoEntrada){
		this.periodoEntrada = periodoEntrada;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}