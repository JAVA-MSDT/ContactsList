package com.javamsdt.contactlist.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Phone {

    private Integer phoneId;
    private String title;
    private String number;
}
