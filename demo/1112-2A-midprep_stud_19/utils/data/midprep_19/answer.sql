CREATE TABLE product_19 (
	pId int NOT NULL PRIMARY KEY,
	pName varchar(255),
	cat_id int,
	price real,
	img_url varchar(255),
	FOREIGN KEY (cat_id) REFERENCES category_19(id) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO product_19 (pId, pName, cat_id, price, img_url)
VALUES 
(1, 'Brown Brim', 1, 25, '/img/hats/brown-brim.png'),
(2, 'Blue Beanie', 1, 18, '/img/hats/blue-beanie.png'),
(3, 'Brown Cowboy', 1, 35, '/img/hats/brown-cowboy.png'),
(4, 'Grey Brim', 1, 25, '/img/hats/grey-brim.png'),
(5, 'Blue Tanktop', 4, 25, '/img/womens/blue-tank.png'),
(6, 'Floral Blouse', 4, 20, '/img/womens/floral-blouse.png'),
(7, 'Floral Dress', 4, 80, '/img/womens/floral-skirt.png'),
(8, 'Red Dots Dress', 4, 80, '/img/womens/red-polka-dot-dress.png')