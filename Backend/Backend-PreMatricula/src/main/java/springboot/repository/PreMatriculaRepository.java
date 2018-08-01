package springboot.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springboot.model.PreMatricula;

@Repository
@Transactional
public interface PreMatriculaRepository extends JpaRepository<PreMatricula, String>{

}
