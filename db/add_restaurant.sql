insert into restaurants
  (name, address, city, state, zipcode, phone_number, title, salary, post_date, expertise, description, phone_area)
  values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  return *
