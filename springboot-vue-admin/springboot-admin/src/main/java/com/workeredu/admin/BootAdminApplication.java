package com.workeredu.admin;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.ApplicationPidFileWriter;

@MapperScan(basePackages = "com.workeredu.admin.mapper")
@SpringBootApplication
public class BootAdminApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(BootAdminApplication.class);
        app.addListeners(new ApplicationPidFileWriter());
        app.run(args);
    }
}
