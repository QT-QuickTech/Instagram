package com.Qt.instademo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Qt.instademo.model.Like;

public interface LikeRepository extends JpaRepository<Like, Long> {
}
