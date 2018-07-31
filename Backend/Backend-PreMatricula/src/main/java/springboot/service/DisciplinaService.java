package springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.exception.RegisterNotFoundException;
import springboot.model.Disciplina;
import springboot.repository.DisciplinaRepository;

@Service
public class DisciplinaService {
	
	@Autowired
	private DisciplinaRepository disciplinaRepository;

	public List<Disciplina> getAll() {
		return disciplinaRepository.findAll();
	}

	public Disciplina getById(String codigo) {
		Optional<Disciplina> optDisciplina = disciplinaRepository.findById(codigo);

		if (!optDisciplina.isPresent()) {
			throw new RegisterNotFoundException("Disciplina não está cadastrada.");
		}

		return optDisciplina.get();
	}

	public Disciplina save(Disciplina disciplina) {
		disciplinaRepository.save(disciplina);
		return disciplina;
	}

	public Disciplina update(Disciplina disciplina, String codigo) {
		Optional<Disciplina> optDisciplina = disciplinaRepository.findById(codigo);

		if (!optDisciplina.isPresent()) {
			throw new RegisterNotFoundException("Disciplina não está cadastrada.");
		}

		Disciplina novaDisciplina = optDisciplina.get();
		novaDisciplina.setNome(disciplina.getNome());
		novaDisciplina.setCodigo(disciplina.getCodigo());
		novaDisciplina.setNumCreditos(disciplina.getNumCreditos());
		novaDisciplina.setCargaHoraria(disciplina.getCargaHoraria());
		novaDisciplina.setPpc(disciplina.getPpc());
		novaDisciplina.setTipo(disciplina.getTipo());

		disciplinaRepository.save(novaDisciplina);

		return novaDisciplina;
	}

	public Disciplina delete(String codigo) {
		Optional<Disciplina> optDisciplina = disciplinaRepository.findById(codigo);

		if (!optDisciplina.isPresent()) {
			throw new RegisterNotFoundException("Disciplina não está cadastrada.");
		}

		Disciplina disciplina = optDisciplina.get();
		disciplinaRepository.delete(disciplina);

		return disciplina;
	}
	
	public List<Disciplina> pesquisarPorNome(String nome) {
		return disciplinaRepository.pesquisarPorNome(nome);
	}
	
	public List<Disciplina> pesquisarPorCodigo(String codigo) {
		return disciplinaRepository.pesquisarPorCodigo(codigo);
	}

}
