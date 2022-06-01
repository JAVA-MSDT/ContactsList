package com.javamsdt.contactlist.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.print.attribute.standard.MediaSize;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "phone")
public class Phone {

    @Id
    @Column(name = "phone_id")
    private Integer phoneId;

    @Column(name = "title")
    private String title;

    @Column(name = "number")
    private String number;
}
