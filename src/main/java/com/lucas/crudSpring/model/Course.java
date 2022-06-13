package com.lucas.crudSpring.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column (length = 200, nullable = false)
    private String name;

    @Column (length = 20, nullable = false )
    private String category;

}
