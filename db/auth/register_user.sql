insert into realtors (
   email,
   password
) values (
   ${email}, 
   ${password}
)
returning email;