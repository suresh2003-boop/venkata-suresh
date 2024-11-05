package com.suresh.mvc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.suresh.mvc.entities.Product1;

@Repository
public interface ProductRepository extends JpaRepository<Product1, Long> {

}
