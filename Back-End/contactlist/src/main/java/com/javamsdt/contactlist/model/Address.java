package com.javamsdt.contactlist.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Address {

    private Long addressId;
    private String addressTitle;
    private String country;
    private String provenance;
    private String city;
    private String street;
    private String zipCode;
    private String buildingNumber;
    private String apartmentNumber;

}
