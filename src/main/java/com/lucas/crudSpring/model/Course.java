package com.lucas.crudSpring.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    @JsonProperty("_id")
    private Long id;

    @Column (length = 200, nullable = false)
    private String name;

    @Column (length = 20, nullable = false )
    private String category;

}
