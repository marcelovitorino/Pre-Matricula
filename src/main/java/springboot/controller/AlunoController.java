package springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springboot.model.Aluno;
import springboot.service.AlunoService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class AlunoController {
	
	@Autowired
	AlunoService alunoService;

	@RequestMapping(value = "/aluno", method = RequestMethod.GET)
	public List<Aluno> getAll() {
		return alunoService.getAll();
	}

	@RequestMapping(value = "/aluno", method = RequestMethod.POST)
	public Aluno save(@RequestBody Aluno aluno) {
		return alunoService.save(aluno);
	}

	@RequestMapping(value = "/aluno/{email}", method = RequestMethod.GET)
	public Aluno getByEmail(@PathVariable("email") String email) {
		return alunoService.getById(email);
	}

	@RequestMapping(value = "/aluno/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Aluno> update(@PathVariable("id") String id, @RequestBody Aluno aluno) {
		Aluno updatedAluno = alunoService.update(aluno, id);
		return new ResponseEntity<Aluno>(updatedAluno, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/aluno/{email}", method = RequestMethod.DELETE)
	public ResponseEntity<Aluno> delete(@PathVariable("email") String email) {
		Aluno aluno = alunoService.delete(email);
		return new ResponseEntity<Aluno>(aluno, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/aluno/search/{matricula}", method = RequestMethod.GET)
	public List<Aluno> searchByMatricula(@PathVariable("matricula") String matricula) {
		return alunoService.pesquisarPorMatricula(matricula);
	}
}
