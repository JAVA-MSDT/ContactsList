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

    @OneToMany(orphanRemoval = true)
    @JoinTable(name = "contact_list",
            joinColumns = {@JoinColumn(name = "self_id", referencedColumnName = "contact_id")},
            inverseJoinColumns ={@JoinColumn(name = "my_contact_id", referencedColumnName = "contact_id")} )
    private Set<Contact> contacts;

    @ManyToMany()
    @JoinTable(name = "contact_address",
            joinColumns = {@JoinColumn(name = "contact_id", referencedColumnName = "contact_id")},
            inverseJoinColumns ={@JoinColumn(name = "address_id", referencedColumnName = "address_id")} )
    private Set<Address> addresses;

    @OneToMany(orphanRemoval = true)
    @JoinTable(name = "contact_social_media",
            joinColumns = {@JoinColumn(name = "contact_id", referencedColumnName = "contact_id")},
            inverseJoinColumns ={@JoinColumn(name = "social_media_id", referencedColumnName = "social_id")} )
    private Set<SocialMedia> socialMedia;

    @OneToMany(orphanRemoval = true)
    @JoinTable(name = "contact_phone",
            joinColumns = {@JoinColumn(name = "contact_id", referencedColumnName = "contact_id")},
            inverseJoinColumns ={@JoinColumn(name = "phone_id", referencedColumnName = "phone_id")} )
    private Set<Phone> phones;



}
