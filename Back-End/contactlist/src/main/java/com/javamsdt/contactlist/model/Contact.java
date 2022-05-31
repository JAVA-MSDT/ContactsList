package com.javamsdt.contactlist.model;

import java.util.Set;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Contact {

    private Long contactId;
    private String username;
    private String firstName;
    private String middleName;
    private String lastName;
    private String contactTitle;
    private String contactAvatarUrl;
    private Set<Contact> contacts;
    private Set<Address> addresses;


}
