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
	
	@Query("SELECT * FROM Aluno a WHERE LOWER(a.nome) = LOWER(nome)")
	public List<Aluno> pesquisarPorNome(@Param("nome") String nome);
	
	@Query("SELECT * FROM Aluno a WHERE a.matricula = matricula")
	public List<Aluno> pesquisarPorMatricula(@Param("matricula") String matricula);
	
	@Query("SELECT * FROM Aluno a WHERE a.email = email")
	public List<Aluno> pesquisarPorEmail(@Param("email") String email);

}
