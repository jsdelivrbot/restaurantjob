insert into candidates
  (name, city, state, zipcode, phone_number, title, desire_salary, register_date, expertise, description, relocate)
  values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  returning *
