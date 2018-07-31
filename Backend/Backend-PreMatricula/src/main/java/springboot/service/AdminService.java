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
	
	@Autowired
	private AdminRepository adminRepository;

	public List<Admin> getAll() {
		return adminRepository.findAll();
	}

	public Admin getById(Long id) {
		Optional<Admin> optAdmin = adminRepository.findById(id);

		if (!optAdmin.isPresent()) {
			throw new RegisterNotFoundException("Administrador não está cadastrado.");
		}

		return optAdmin.get();
	}

	public Admin save(Admin admin) {
		adminRepository.save(admin);
		return admin;
	}

	public Admin update(Admin admin, Long id) {
		Optional<Admin> optAdmin = adminRepository.findById(id);

		if (!optAdmin.isPresent()) {
			throw new RegisterNotFoundException("Administrador não está cadastrado.");
		}

		Admin novoAdmin = optAdmin.get();
		novoAdmin.setEmail(admin.getEmail());

		adminRepository.save(novoAdmin);

		return novoAdmin;
	}

	public Admin delete(Long id) {
		Optional<Admin> optAdmin = adminRepository.findById(id);

		if (!optAdmin.isPresent()) {
			throw new RegisterNotFoundException("Administrador não está cadastrado.");
		}

		Admin admin = optAdmin.get();
		adminRepository.delete(admin);

		return admin;
	}
	
	public List<Admin> pesquisarPorEmail(String email) {
		return adminRepository.pesquisarPorEmail(email);
	}

}
