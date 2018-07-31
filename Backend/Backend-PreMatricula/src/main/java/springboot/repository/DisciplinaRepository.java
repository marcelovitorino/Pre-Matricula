package springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springboot.model.Disciplina;

@Repository
@Transactional
public interface DisciplinaRepository extends JpaRepository<Disciplina, Long>{
	
	@Query("SELECT * FROM disciplina d WHERE LOWER(d.nome)  = LOWER(nome)")
	public List<Disciplina> pesquisarPorNome(@Param("nome") String nome);
	
	@Query("SELECT * FROM disciplina d WHERE d.codigo = codigo")
	public List<Disciplina> pesquisarPorCodigo(@Param("codigo") String codigo);

}