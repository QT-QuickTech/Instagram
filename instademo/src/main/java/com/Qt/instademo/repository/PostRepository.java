package com.Qt.instademo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Qt.instademo.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {
   
}