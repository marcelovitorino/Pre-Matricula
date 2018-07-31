create database db_pre_matricula; -- Create the new database
create user 'springuser'@'localhost' identified by 'ThePassword'; -- Creates the user
grant all on db_pre_matricula.* to 'springuser'@'localhost'; -- Gives all the privileges to the new user on the newly created database