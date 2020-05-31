
select*from roll;

create table roll(
	id_roll Smallserial not null primary key,
	roll varchar(20) not null
);

create table usuario(
	id_usuario smallserial not null primary key,
	nombre varchar(30) not null,
	apellidos varchar(100) not null,
	correo varchar(100) not null,
	contraseña varchar(200) not null,
	telefono varchar(11),
	domicilio varchar(500),
	id_roll smallint,
	edad date,
	imgperfil varchar(500),
	portada varchar(500),
	foreign key(id_roll ) references roll(id_roll) on delete cascade on update cascade 
);

create table usuario_moral(
	id_usuario smallserial not null primary key,
	nombre varchar(100) not null,
	rfc varchar(12) not null,
	correo varchar(100) not null,
	contraseña varchar(200) not null,
	domicilio varchar(500),
	id_roll  smallint,
	imgperfil varchar(500),
	foreign key(id_roll ) references roll(id_roll) on delete cascade on update cascade
);


create table publicacion(
	id_publicacion smallserial not null primary key,
	id_usuario smallint not null,
	imagen varchar,
	contenido varchar,
	foreign key(id_usuario) references usuario(id_usuario) on delete cascade on update cascade
);

create table publicacion(
	id_publicacion Smallserial not null primary key,
	id_usuario Smallint not null,
	imagen varchar,
	contenido varchar,
	foreign key(id_usuario) references usuario(id_usuario) on delete cascade on update cascade
);

select*from publicacion;

select*from usuario_moral;

select*from usuario;
select*from publicacion;
delete from publicacion;
insert into publicacion(id_usuario, imagen, contenido)values (158, 'jsbjbahj', 'kajdkjadkasd');

select U.nombre, U.apellidos,  Pu.imagen, Pu.contenido from publicacion Pu inner join usuario U on U.id_usuario = Pu.id_usuario;


