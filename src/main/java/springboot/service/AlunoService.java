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

	public Aluno getById(String id) {
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

	public Aluno update(Aluno aluno, String id) {
		Optional<Aluno> optAluno = alunoRepository.findById(id);

		if (!optAluno.isPresent()) {
			throw new RegisterNotFoundException("Aluno não está cadastrado.");
		}

		Aluno novoAluno = optAluno.get();
		novoAluno.setNome(aluno.getNome());
		novoAluno.setMatricula(aluno.getMatricula());
		novoAluno.setEmail(aluno.getEmail());
		novoAluno.setPeriodoEntrada(aluno.getPeriodoEntrada());
		novoAluno.setPreMatricula(aluno.getPreMatricula());

		alunoRepository.save(novoAluno);

		return novoAluno;
	}

	public Aluno delete(String id) {
		Optional<Aluno> optAluno = alunoRepository.findById(id);

		if (!optAluno.isPresent()) {
			throw new RegisterNotFoundException("Aluno não está cadastrado.");
		}

		Aluno aluno = optAluno.get();
		alunoRepository.delete(aluno);

		return aluno;
	}
	
	public List<Aluno> pesquisarPorEmail(String email) {
		return alunoRepository.pesquisarPorEmail(email);
	}
	
	public List<Aluno> pesquisarPorMatricula(String matricula) {
		return alunoRepository.pesquisarPorMatricula(matricula);
	}
}
