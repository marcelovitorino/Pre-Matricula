package springboot.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springboot.model.Aluno;

@Repository
@Transactional
public interface AlunoRepository extends JpaRepository<Aluno, String> {

	@Query("SELECT a FROM Aluno a WHERE LOWER(a.matricula) LIKE CONCAT('%', LOWER(:matricula), '%')")
	public Optional<Aluno> pesquisarPorMatricula(@Param("matricula") String matricula);
}
