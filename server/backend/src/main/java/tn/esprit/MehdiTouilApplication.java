package tn.esprit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ComponentScans;

@SpringBootApplication
@ComponentScan(basePackages = { "tn.esprit", "tn.esprit.CorsConfiguration" })
public class MehdiTouilApplication {

	public static void main(String[] args) {
		SpringApplication.run(MehdiTouilApplication.class, args);
	}

}
