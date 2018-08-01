package springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.model.Admin;
import springboot.repository.AdminRepository;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	public List<Admin> getAll() {
		return adminRepository.findAll();
	}

	public Admin save(Admin admin) {
		adminRepository.save(admin);
		return admin;
	}
	
	public List<Admin> pesquisarPorEmail(String email) {
		return adminRepository.pesquisarPorEmail(email);
	}
}
