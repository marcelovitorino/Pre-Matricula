package springboot.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.exception.RegisterNotFoundException;
import springboot.model.Aluno;
import springboot.repository.AlunoRepository;

@Service
public class AlunoService {
	
	
	@Autowired
	private AlunoRepository alunoRepository;

	public List<Aluno> getAll() {
		return alunoRepository.findAll();
	}

	public Aluno getById(Long id) {
		Optional<Aluno> optAluno = alunoRepository.findById(id);

		if (!optAluno.isPresent()) {
			throw new RegisterNotFoundException("Aluno não está cadastrado.");
		}

		return optAluno.get();
	}

	public Aluno save(Aluno aluno) {
		alunoRepository.save(aluno);
		return aluno;
	}

	public Aluno update(Aluno aluno, Long id) {
		Optional<Aluno> optAluno = alunoRepository.findById(id);

		if (!optAluno.isPresent()) {
			throw new RegisterNotFoundException("Aluno não está cadastrado.");
		}

		Aluno newAluno = optAluno.get();
		newAluno.setNome(aluno.getNome());
		newAluno.setMatricula(aluno.getMatricula());
		newAluno.setEmail(aluno.getEmail());
		newAluno.setPeriodoEntrada(aluno.getPeriodoEntrada());
		newAluno.setPreMatricula(aluno.getPreMatricula());

		alunoRepository.save(newAluno);

		return newAluno;
	}

	public Aluno delete(Long id) {
		Optional<Aluno> optAluno = alunoRepository.findById(id);

		if (!optAluno.isPresent()) {
			throw new RegisterNotFoundException("Aluno não está cadastrado.");
		}

		Aluno aluno = optAluno.get();
		alunoRepository.delete(aluno);

		return aluno;
	}
	
	public List<Aluno> searchByName(String name) {
		return alunoRepository.searchByNome(name);
	}
}
