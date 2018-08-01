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

import springboot.model.PreMatricula;
import springboot.service.PreMatriculaService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class PreMatriculaController {

	@Autowired
	PreMatriculaService preMatriculaService;

	@RequestMapping(value = "/prematricula", method = RequestMethod.GET)
	public List<PreMatricula> getAll() {
		return preMatriculaService.getAll();
	}

	@RequestMapping(value = "/prematricula", method = RequestMethod.POST)
	public PreMatricula save(@RequestBody PreMatricula preMatricula) {
		return preMatriculaService.save(preMatricula);
	}
	/*
	 * Não acho que precisa.
	 * 
	 * @RequestMapping(value = "/prematricula/{id}", method = RequestMethod.GET)
	 * public PreMatricula getById(@PathVariable("id") String alunoEmail) { return
	 * preMatriculaService.getById(alunoEmail); }
	 */

	@RequestMapping(value = "/prematricula/{id}", method = RequestMethod.PUT)
	public ResponseEntity<PreMatricula> update(@PathVariable("id") String alunoEmail,
			@RequestBody PreMatricula preMatricula) {
		PreMatricula updatedPreMatricula = preMatriculaService.update(preMatricula, alunoEmail);
		return new ResponseEntity<PreMatricula>(updatedPreMatricula, HttpStatus.OK);
	}

	@RequestMapping(value = "/prematricula/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<PreMatricula> delete(@PathVariable("id") String emailAluno) {
		PreMatricula preMatricula = preMatriculaService.delete(emailAluno);
		return new ResponseEntity<PreMatricula>(preMatricula, HttpStatus.OK);
	}

}
