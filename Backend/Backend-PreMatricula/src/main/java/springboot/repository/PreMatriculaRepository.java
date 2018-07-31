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

}
