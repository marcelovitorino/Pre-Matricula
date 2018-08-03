package springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.exception.RegisterNotFoundException;
import springboot.model.PreMatricula;
import springboot.repository.PreMatriculaRepository;

@Service
public class PreMatriculaService {
	
	private final String errorMessage = "Pré-Matricula não está cadastrada.";

	@Autowired
	private PreMatriculaRepository preMatriculaRepository;

	public List<PreMatricula> getAll() {
		return preMatriculaRepository.findAll();
	}
	
	public PreMatricula getByEmail(String email) {

		Optional<PreMatricula> optPreMatricula = preMatriculaRepository.pesquisarPorEmail(email);

		if (!optPreMatricula.isPresent()) {
			throw new RegisterNotFoundException(errorMessage);
		}
		
		return optPreMatricula.get();
	}

	public PreMatricula save(PreMatricula preMatricula) {
		preMatriculaRepository.save(preMatricula);
		return preMatricula;
	}

	public PreMatricula update(PreMatricula preMatricula, String email) {
		Optional<PreMatricula> optPreMatricula = preMatriculaRepository.pesquisarPorEmail(email);

		if (!optPreMatricula.isPresent()) {
			throw new RegisterNotFoundException(errorMessage);
		}

		PreMatricula novaPreMatricula = optPreMatricula.get();
		novaPreMatricula.setEmail(preMatricula.getEmail());
		novaPreMatricula.setDisciplina(preMatricula.getDisciplina());

		preMatriculaRepository.save(novaPreMatricula);

		return novaPreMatricula;
	}

	public PreMatricula delete(String email) {
		Optional<PreMatricula> optPreMatricula = preMatriculaRepository.pesquisarPorEmail(email);

		if (!optPreMatricula.isPresent()) {
			throw new RegisterNotFoundException(errorMessage);
		}

		PreMatricula preMatricula = optPreMatricula.get();
		preMatriculaRepository.delete(preMatricula);

		return preMatricula;
	}
}
