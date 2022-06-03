----------------------------------------------------
------------------- MAIN TABLES --------------------
----------------------------------------------------

CREATE TABLE phone (
	phone_id SERIAL PRIMARY KEY,
	title VARCHAR,
	number VARCHAR
);

CREATE TABLE social_media (
	social_id SERIAL PRIMARY KEY,
	social_title VARCHAR,
	title VARCHAR,
	url VARCHAR
);

CREATE TABLE address (
	address_id BIGSERIAL PRIMARY KEY,
	address_title VARCHAR,
	country VARCHAR,
	provenance VARCHAR,
	city VARCHAR,
	street VARCHAR,
	zipcode VARCHAR,
	building_number INT,
	apartment_number INT
);

CREATE TABLE contact (
	contact_id BIGSERIAL PRIMARY KEY,
	username VARCHAR,
	firstname VARCHAR,
	middlename VARCHAR,
	lastname VARCHAR,
	contact_title VARCHAR,
	avatar_url VARCHAR
);

----------------------------------------------------
--------------- ASSOCIATION TABLES -----------------
----------------------------------------------------

CREATE TABLE contact_list (
	contact_list_id BIGSERIAL PRIMARY KEY,
	self_id BIGINT  ,
	my_contact_id BIGINT,
	FOREIGN KEY (self_id) REFERENCES contact(contact_id),
	FOREIGN KEY (my_contact_id) REFERENCES contact(contact_id)
);

CREATE TABLE contact_address (
	contact_address_id BIGSERIAL PRIMARY KEY,
	contact_id BIGINT,
	address_id BIGINT,
	FOREIGN KEY (contact_id) REFERENCES contact(contact_id),
    FOREIGN KEY (address_id) REFERENCES address(address_id)
);

CREATE TABLE contact_social_media (
	contact_social_media_id BIGSERIAL PRIMARY KEY,
	contact_id BIGINT,
	social_media_id BIGINT,
	FOREIGN KEY (contact_id) REFERENCES contact(contact_id),
    FOREIGN KEY (social_media_id) REFERENCES social_media(social_id)
);

CREATE TABLE contact_phone (
	contact_phone_id BIGSERIAL PRIMARY KEY,
	contact_id BIGINT,
	phone_id BIGINT,
	FOREIGN KEY (contact_id) REFERENCES contact(contact_id),
    FOREIGN KEY (phone_id) REFERENCES phone(phone_id)
);
