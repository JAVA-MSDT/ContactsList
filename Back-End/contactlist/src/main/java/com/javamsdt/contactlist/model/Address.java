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
@Table(name = "address")
public class Address {

    @Id

    @Column(name = "address_id")
    private Long addressId;

    @Column(name = "address_title")
    private String addressTitle;

    @Column(name = "country")
    private String country;

    @Column(name = "provenance")
    private String provenance;

    @Column(name = "city")
    private String city;

    @Column(name = "street")
    private String street;

    @Column(name = "zipcode")
    private String zipCode;

    @Column(name = "building_number")
    private int buildingNumber;

    @Column(name = "apartment_number")
    private int apartmentNumber;


}
