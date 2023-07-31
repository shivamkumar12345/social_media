package com.example.backendproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.backendproject.usersrepo.UsersRepo;

//
//@SpringBootApplication(scanBasePackages={
//"com.example.backendproject", "com.example.application"})
//@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})

//@EnableJpaRepositories(basePackageClasses = UsersRepo.class)
//@AutoConfiguration
@SpringBootApplication//(exclude={DataSourceAutoConfiguration.class})
public class BackendprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendprojectApplication.class, args);
	}

}
