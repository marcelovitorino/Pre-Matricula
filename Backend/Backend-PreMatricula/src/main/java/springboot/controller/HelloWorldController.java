package springboot.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class HelloWorldController {
	
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String helloWorld() {
		return "Hello, World!!!";
	}
	
	//Criar os objetos PreMatricula, Aluno, Disciplina
	// Listar todos os alunos que querem tal disciplina
	//Cadastrar adm e remover adm
	// Delegar as funcoes de PreMatricula, Aluno, Disciplina para os services
}