package springboot.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "aluno")
public class Aluno implements Serializable {

	private static final long serialVersionUID = 6194388355522784427L;

	@Id
	@Column(nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String matricula;
	
	@Column(nullable = false)
	private String nome;

	@Column(nullable = false)
	private String periodoEntrada;
	
	@Column(nullable = true)// mantem essa assinatura?
	private PreMatricula preMatricula;
	
	public Aluno(){
		
	}
	
	public Aluno(String matricula, String nome,  String email, String periodoEntrada) {
		super();
		this.matricula = matricula;
		this.nome = nome;
		this.email = email;
		this.periodoEntrada = periodoEntrada;
		this.preMatricula = new PreMatricula();
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
	
	
	//@OneToOne (cascade = CascadeType.ALL)
	//@JoinTable(name = "aluno_preMatricula", 
	//joinColumns = @JoinColumn(name = "email_aluno", referencedColumnName = "email"),
	//inverseJoinColumns = @JoinColumn(name = "preMatricula_id", referencedColumnName = "id"))
	@OneToOne
	@JoinColumn(name = "AlunoPreMatricula")
	public PreMatricula getPreMatricula() {
		return preMatricula;
	}

	public void setPreMatricula(PreMatricula preMatricula) {
		this.preMatricula = preMatricula;
	}
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		String result = String.format("Nome: %s, email: %s, matricula: %s, periodo de ingresso: %s", nome, email, matricula, periodoEntrada);
		result += preMatricula.toString();
		return result;
	}
	
}