package springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springboot.model.Admin;
import springboot.service.AdminService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*")
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public List<Admin> getAdmin() {
		return adminService.getAll();
	}
	
	@RequestMapping(value = "/admin/{email}", method = RequestMethod.GET)
	public Admin getAdminByEmail(@PathVariable("email") String email) {
		return adminService.pesquisarPorEmail(email);
	}

	@RequestMapping(value = "/admin", method = RequestMethod.POST)
	public Admin save(@RequestBody Admin admin) {
		return adminService.save(admin);
	}
}
