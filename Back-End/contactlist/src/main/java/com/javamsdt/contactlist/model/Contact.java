package com.javamsdt.contactlist.model;

import java.util.Set;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @Column(name = "contact_id")
    private Long contactId;

    @Column(name = "username")
    private String username;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "middlename")
    private String middleName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "contact_title")
    private String contactTitle;

    @Column(name = "avatar_url")
    private String contactAvatarUrl;

    @OneToMany
    private Set<Contact> contacts;

    @ManyToMany
    private Set<Address> addresses;

    @OneToMany
    private Set<SocialMedia> socialMedia;

    @OneToMany
    private Set<Phone> phones;



}
