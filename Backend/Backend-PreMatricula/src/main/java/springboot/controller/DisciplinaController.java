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

import springboot.model.Disciplina;
import springboot.service.DisciplinaService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class DisciplinaController {

	@Autowired
	DisciplinaService disciplinaService;

	@RequestMapping(value = "/disciplina", method = RequestMethod.GET)
	public List<Disciplina> getAll() {
		return disciplinaService.getAll();
	}

	@RequestMapping(value = "/disciplina", method = RequestMethod.POST)
	public Disciplina save(@RequestBody Disciplina disciplina) {
		return disciplinaService.save(disciplina);
	}

	@RequestMapping(value = "/disciplina/{codigo}", method = RequestMethod.GET)
	public Disciplina getByCodigo(@PathVariable("codigo") String codigo) {
		return disciplinaService.getById(codigo);
	}

	@RequestMapping(value = "/disciplina/{codigo}", method = RequestMethod.PUT)
	public ResponseEntity<Disciplina> update(@PathVariable("codigo") String codigo,
			@RequestBody Disciplina disciplina) {
		Disciplina updatedDisciplina = disciplinaService.update(disciplina, codigo);
		return new ResponseEntity<Disciplina>(updatedDisciplina, HttpStatus.OK);
	}

	@RequestMapping(value = "/disciplina/{codigo}", method = RequestMethod.DELETE)
	public ResponseEntity<Disciplina> delete(@PathVariable("codigo") String codigo) {
		Disciplina disiciplina = disciplinaService.delete(codigo);
		return new ResponseEntity<Disciplina>(disiciplina, HttpStatus.OK);
	}

	@RequestMapping(value = "/disciplina/search/{disciplina}", method = RequestMethod.GET)
	public List<Disciplina> searchByNome(@PathVariable("disciplina") String disciplina) {
		return disciplinaService.pesquisarPorNome(disciplina);
	}

}
