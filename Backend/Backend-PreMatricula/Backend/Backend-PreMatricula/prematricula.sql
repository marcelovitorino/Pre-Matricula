create database db_pre_matricula;
create user 'springuser'@'localhost' identified by 'springpassword';
grant all on db_pre_matricula.* to 'springuser'@'localhost';
