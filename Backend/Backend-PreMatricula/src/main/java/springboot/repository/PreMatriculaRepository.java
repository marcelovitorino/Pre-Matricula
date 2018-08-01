package springboot.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springboot.model.PreMatricula;

@Repository
@Transactional
public interface PreMatriculaRepository extends JpaRepository<PreMatricula, Long>{
	
	@Query("SELECT a FROM PreMatricula a WHERE LOWER(a.email) LIKE CONCAT('%', LOWER(:email), '%')")
	public List<PreMatricula> pesquisarPorEmail(@Param("email") String email);
	

}
