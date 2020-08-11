SET SQL_MODE='ORACLE';

delimiter $$
CREATE OR REPLACE PROCEDURE set_up_mqdb()
BEGIN
CREATE TABLE customer(
c_id int PRIMARY KEY AUTO_INCREMENT, 
email varchar(200) NOT NULL UNIQUE,
password varchar(200) NOT NULL,
address varchar(200) NOT NULL,
firstname varchar(200) NOT NULL,
lastname varchar(200) NOT NULL,
points int); 

CREATE TABLE pen(
p_id int PRIMARY KEY AUTO_INCREMENT, 
cost int NOT NULL,
name varchar(200) NOT NULL,
description varchar(200),
caption_image varchar(350) NOT NULL);

CREATE TABLE cust_order(
o_id int PRIMARY KEY AUTO_INCREMENT, 
c_id int NOT NULL,
p_id int NOT NULL,
quantity int NOT NULL,
order_date DATETIME NOT NULL,
CONSTRAINT fk_order_customer FOREIGN KEY cust_order(c_id) REFERENCES customer(c_id),
CONSTRAINT fk_order_pen FOREIGN KEY cust_order(p_id) REFERENCES pen(p_id)

);
END;
delimiter ;

delimiter $$
CREATE OR REPLACE PROCEDURE tear_down_mqdb()
BEGIN
DROP TABLE cust_order;
DROP TABLE customer;
DROP TABLE pen;
END;
delimiter ;

delimiter $$
CREATE OR REPLACE PROCEDURE populate_mqdb()
BEGIN
INSERT INTO customer VALUES(0, 'penguy37@gmail.com', 'pen123', '485 Pen St.', 'Mr.', 'Pen', 1000);
INSERT INTO customer VALUES(0, 'pengirl37@gmail.com', 'penvalley', '1200 Pen City Bvld.', 'Ms.', 'Pen', 1500);
INSERT INTO customer VALUES(0, 'normalguy12@gmail.com', 'strongpassword', '123 address', 'Normal', 'Guy', 3);
INSERT INTO customer VALUES(0, 'penlord1@pen.com', 'pens4life', 'pen', 'Craig', 'Craigson', 2000000);

INSERT INTO pen VALUES(0, 30, 'Nemosine Singularity', 'Demonstrator that comes with a cartridge convereter.', './static_images/nemosine_singularity.png');
INSERT INTO pen VALUES(0, 5, 'Jinhao Shark Pen', 'Want to have a cool pen with a shark name? This one\'s for you', './static_images/jinhao_shark.png');
INSERT INTO pen VALUES(0, 20, 'Pilot Metropolitan', 'This pen will make you feel really important', './static_images/pilot_metropolitam.png');
INSERT INTO pen VALUES(0, 30, 'Lamy Safari', 'Beginner friendly pen to start off your collection right.', './static_images/lamy_safari.png');
INSERT INTO pen VALUES(0, 200, 'Pilot Vanishing Point', 'This pen is a status symbol. You can\'t go wrong with a pen like this.', './static_images/pilot_vanishing_point.png');
INSERT INTO pen VALUES(0, 7500000, 'Fulgor Nocturnus Tibaldi', 'You are actually crazy if you purchase this.', './static_images/tibaldi.png');

-- <img [src]={{ (result of api call > model).img_src }} />
END;
delimiter ;

CALL set_up_mqdb;
CALL tear_down_mqdb;
CALL populate_mqdb; 

SELECT * from 