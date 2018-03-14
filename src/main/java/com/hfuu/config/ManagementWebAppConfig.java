package com.hfuu.config;

import com.hfuu.interceptor.AuthorizationInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
public class ManagementWebAppConfig extends WebMvcConfigurerAdapter {

    @Bean
    AuthorizationInterceptor localInterceptor() {
        return new AuthorizationInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(localInterceptor())
            .addPathPatterns("/**")
            .excludePathPatterns("/user/sysLogin");
    }
}
