select C.name as category, S.id, S.name, price, S.local_url 
from category2_19 as C, shop2_19 as S
where S.cat_id = C.id
and C.name = 'womens'