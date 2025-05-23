package com.Qt.instademo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Qt.instademo.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
   List<Post> findAllByUser_UserId(Long userId);  
}