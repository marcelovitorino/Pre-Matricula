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
	
	@Autowired
	private PreMatriculaRepository preMatriculaRepository;

	public List<PreMatricula> getAll() {
		return preMatriculaRepository.findAll();
	}

	public PreMatricula getById(Long id) {
		Optional<PreMatricula> optPreMatricula = preMatriculaRepository.findById(id);

		if (!optPreMatricula.isPresent()) {
			throw new RegisterNotFoundException("Pre-matricula não encontrada.");
		}

		return optPreMatricula.get();
	}

	public PreMatricula save(PreMatricula preMatricula) {
		preMatriculaRepository.save(preMatricula);
		return preMatricula;
	}

	public PreMatricula update(PreMatricula preMatricula, Long id) {
		Optional<PreMatricula> optPreMatricula = preMatriculaRepository.findById(id);

		if (!optPreMatricula.isPresent()) {
			throw new RegisterNotFoundException("Pre-matricula não encontrada. Verificar se o id está correto");
		}

		PreMatricula novaPreMatricula = optPreMatricula.get();
		novaPreMatricula.setDisciplinas(preMatricula.getDisciplinas());

		preMatriculaRepository.save(novaPreMatricula);

		return novaPreMatricula;
	}

	public PreMatricula delete(Long id) {
		Optional<PreMatricula> optPreMatricula = preMatriculaRepository.findById(id);

		if (!optPreMatricula.isPresent()) {
			throw new RegisterNotFoundException("Pre-matricula não encontrada. Verificar se o id está correto");
		}

		PreMatricula preMatricula = optPreMatricula.get();
		preMatriculaRepository.delete(preMatricula);

		return preMatricula;
	}

}