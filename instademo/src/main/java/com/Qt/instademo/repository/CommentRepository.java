package com.Qt.instademo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Qt.instademo.model.Comment;



public interface CommentRepository extends JpaRepository<Comment, Long> {
    
}
