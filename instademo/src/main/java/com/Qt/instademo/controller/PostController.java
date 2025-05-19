package com.Qt.instademo.controller;

import org.springframework.beans.factory.annotation.Autowired;

import com.Qt.instademo.repository.PostRepository;

public class PostController {
    
    @Autowired
    PostRepository repo;
}
