package com.javamsdt.contactlist.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SocialMedia {

    private Integer socialId;
    private String socialTitle;
    private String title;
    private String url;
}
