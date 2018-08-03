package springboot.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springboot.model.Admin;

@Repository
@Transactional
public interface AdminRepository extends JpaRepository<Admin, String>{
	
	@Query("SELECT a FROM Admin a WHERE LOWER(a.email) LIKE CONCAT('%', LOWER(:email), '%')")
	public Optional<Admin> pesquisarPorEmail(@Param("email") String email);

}
