# DeShawn's Dog Walking

-------------ERD--------------
Table Dog {
  id int pk
  name varchar
  about varchar
  cityId int
  walkerId int
  picUrl varchar
}

Table Walker {
  id int pk
  name varchar
  about varchar
  picUrl varchar
}

Table WalkerCity {
  id int pk
  walkerId int
  cityId int
}

Table City {
  id int pk
  name varchar
  picUrl varchar
}

Ref: "Dog"."cityId" > "City"."id"
Ref: "Walker"."id" < "WalkerCity"."walkerId"
Ref: "City"."id" < "WalkerCity"."cityId"
Ref: "Walker"."id" < "Dog"."walkerId"