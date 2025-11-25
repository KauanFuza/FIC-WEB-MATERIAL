create database ger_tarefa

create table usuario (
  id integer primary key auto_increment,
  nome varchar(100) not null,
  email varchar(100) unique not null,
  senha varchar(100) not null
  );

create table tarefa (
  id integer primary key auto_increment,
  descricao varchar(100) not null,
  situacao varchar(20) not null,
  id_usuario integer not null,

  foreign key (id_usuario) references usuario (id)
);