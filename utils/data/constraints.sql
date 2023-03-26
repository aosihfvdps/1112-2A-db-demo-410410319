-- 定義域限制 (domain constraints)
INSERT INTO shop_19 (id, name, cat_id, price, remote_url, local_url)
VALUES
(101, 'Blue Tanktop', 4, 'a25', 'https://i.ibb.co/7CQVJNm/blue-tank.png', '/img/womens/blue-tank.png')


--關聯鍵限制 (primary key constraints)
INSERT INTO shop_19 (id, name, cat_id, price, remote_url, local_url)
VALUES
(2, 'Blue Tanktop', 4, 25, 'https://i.ibb.co/7CQVJNm/blue-tank.png', '/img/womens/blue-tank.png')


--實體完整限制 (entity integrity constraints)
INSERT INTO shop_19 (id, name, cat_id, price, remote_url, local_url)
VALUES
(null, 'Blue Tanktop', 4, 25, 'https://i.ibb.co/7CQVJNm/blue-tank.png', '/img/womens/blue-tank.png')


--參考完整限制 (referential integrity constraints)
INSERT INTO shop_19 (id, name, cat_id, price, remote_url, local_url)
VALUES
(101, 'Blue Tanktop', 6, 25, 'https://i.ibb.co/7CQVJNm/blue-tank.png', '/img/womens/blue-tank.png')


--ON UPDATE CASCASE

--ON DELETE SET NULL