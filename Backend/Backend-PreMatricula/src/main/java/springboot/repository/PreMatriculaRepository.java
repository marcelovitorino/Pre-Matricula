package springboot.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springboot.model.PreMatricula;

@Repository
@Transactional
public interface PreMatriculaRepository extends JpaRepository<PreMatricula, Long>{
	
	//@Query("SELECT a FROM PreMatricula a WHERE LOWER(a.email) LIKE CONCAT('%', LOWER(:email), '%')")
	//public List<Admin> pesquisarPorEmail(@Param("email") String email);
	

}
