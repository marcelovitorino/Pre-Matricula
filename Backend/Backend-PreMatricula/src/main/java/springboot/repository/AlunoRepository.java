package springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springboot.model.Aluno;

@Repository
@Transactional
public interface AlunoRepository extends JpaRepository<Aluno, Long>{
	
	@Query("SELECT matricula, email FROM Aluno a WHERE LOWER(a.nome)  = LOWER(nome)")// Creio estar correto
	public List<Aluno> searchByNome(@Param("nome") String nome);

}
