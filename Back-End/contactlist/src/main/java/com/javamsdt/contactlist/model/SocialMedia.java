package com.javamsdt.contactlist.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "social_media")
public class SocialMedia {

    @Id
    @Column(name = "social_id")
    private Integer socialId;

    @Column(name = "social_title")
    private String socialTitle;

    @Column(name = "title")
    private String title;

    @Column(name = "url")
    private String url;

}
