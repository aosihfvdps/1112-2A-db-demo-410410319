CREATE TABLE shop_19(
    id int NOT NULL PRIMARY KEY,
    name varchar(255),
    cat_id int,
    price real,
    remote_url varchar(255),
    local_url varchar(255),
    FOREIGN KEY (cat_id) REFERENCES category_19(id) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO shop_19 (id, name, cat_id, price, remote_url, local_url)
VALUES
(1, 'Blue Tanktop', 4, 25, 'https://i.ibb.co/7CQVJNm/blue-tank.png', '/img/womens/blue-tank.png'),
(2, 'Floral Blouse', 4, 20, 'https://i.ibb.co/4W2DGKm/floral-blouse.png', '/img/womens/floral-blouse.png'),
(3, 'Floral Dress', 4, 80, 'https://i.ibb.co/KV18Ysr/floral-skirt.png', '/img/womens/floral-skirt.png')