package springboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.exception.RegisterNotFoundException;
import springboot.model.Admin;
import springboot.repository.AdminRepository;

@Service
public class AdminService {
	
	private final String errorMessage = "Admin não está cadastrado.";
	
	@Autowired
	private AdminRepository adminRepository;
	
	public List<Admin> getAll() {
		return adminRepository.findAll();
	}

	public Admin save(Admin admin) {
		adminRepository.save(admin);
		return admin;
	}
	
	public Admin pesquisarPorEmail(String email) {
		
		Optional<Admin> optAdmin = adminRepository.pesquisarPorEmail(email);

		if (!optAdmin.isPresent()) {
			throw new RegisterNotFoundException(errorMessage);
		}
		
		return optAdmin.get();
	}
}
