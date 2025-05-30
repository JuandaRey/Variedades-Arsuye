--Crear Base de Datos
CREATE DATABASE VariedadesArsuye;

--Crear Tabla Productos
CREATE TABLE Productos (
  Id INT PRIMARY KEY IDENTITY,
  Nombre NVARCHAR(100),
  Descripcion NVARCHAR(255),
  Precio DECIMAL(18,3),
  Cantidad INT,
  Estado NVARCHAR(20)
);

--Crear Tabla Usuarios
CREATE TABLE Usuarios (
  Id INT PRIMARY KEY IDENTITY,
  Nombre NVARCHAR(200),
  Correo NVARCHAR(200),
  Clave NVARCHAR(200)
);

--SELECT para ver la Usuarios 
SELECT * FROM Usuarios

--SELECT para ver la tabla 
SELECT * FROM Productos

--Activar para insertar datos
SET IDENTITY_INSERT Productos ON;

--Caja de Lapices de Grafito(12 Unidades)
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
1, 'Caja de Lapices de Grafito(12 Unidades)' , 'Set de 12 l�pices de grafito de alta calidad con diferentes grados de dureza.'
, $10.000, '10', 'Disponible');

--Set de Bol�grafos de Tinta (4 colores)
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
2, 'Set de Bol�grafos de Tinta (4 colores)' , 'Paquete de 4 bol�grafos de tinta suave en colores negro, azul, rojo y verde. �Disfruta de unas pocas cosas de estilo!'
, 6.000, '15', 'Disponible');

--Cuaderno Universitario (100 hojas)
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
3, 'Cuaderno Universitario (100 hojas)' , 'Cuaderno tama�o universitario con 100 hojas de papel rayado de 70 gramos.'
, 7.000, '15', 'Disponible');

--Set de Resaltadores Fluorescentes (5 colores)
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
4, 'Set de Resaltadores Fluorescentes (5 colores)' , 'Juego de 5 resaltadores en tonos vibrantes para destacar informaci�n importante.'
, 7.500, '20', 'Disponible');

--Paquete de Borradores de L�piz (3 unidades)
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
5, 'Paquete de Borradores de L�piz (3 unidades)' , 'Pack de 3 borradores suaves y eficientes que no da�an el papel.'
, 3.000, '18', 'Disponible');

--Regla de Pl�stico Transparente (30 cm)
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
6, 'Regla de Pl�stico Transparente (30 cm)' , 'Regla de pl�stico transparente de 30 cent�metros con doble escala de medici�n.'
, 2.500, '30', 'Disponible');

--Colbon
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
7, 'Colbon' , 'Pegante l�quido para trabajar en varias superficies.'
, 6.500, '21', 'Disponible');

--Cartulina
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
8, 'Cartulina' , 'Ideal para manualidades, trabajos escolares o para dar un toque creativo a tus proyectos.'
, 1.500, '50', 'Disponible');

--Tijeras
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
9, 'Tijeras' , 'La tijeras punta fina es una herramienta manual que sirve para cortar tela, papel, cabello, etc.'
, 3.000, '30', 'Disponible');

--Sacapuntas
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
10, 'Sacapuntas' , 'Sacapuntas para l�pices, especialmente dise�ado para obtener una punta que permite una aplicaci�n m�s profesional'
, 1.500, '50', 'Disponible');

--Grapadora
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
11, 'Grapadora' , 'Grapadora, ideal para uso diario. Capacidad de grapas: Hasta 50.'
, 3.000, '50', 'Disponible');

--Colores
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
12, 'Caja de Colores (15 Unidades)' , 'Caja de colores Norma premium. Desarolla tus habilidades artisticas con los colores norma ultra suaves fabricados con los mas altos estandares.'
, 18.500, '60', 'Disponible');

--Set de pinceles x 4 piezas
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
13, 'Set de pinceles x 4 piezas' , 'IPinceles de madera con mangos barnizados.'
, 4.500, '37', 'Disponible');

--Comp�s
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
14, 'Comp�s' , 'Comp�s study con patas met�licas. - Cabeza ergon�mica y portaminas 0.5mm. - Estuche pl�stico que trae borde reglado.'
, 6.900, '40', 'Disponible');

--Corrector Cinta
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
15, 'Corrector Cinta' , 'Corrector ARTESCO Cinta 5mm x 10m'
, 6.000, '50', 'Disponible');

--Tempera X 6 Paleta y Pincel Parchesitos
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
16, 'Tempera X 6 Paleta y Pincel Parchesitos' , 'Caja X6 temperas PARCHESITOS de 20 ml cada una, mas una paleta para mezclar y un pincel delgado, Pintura soluble en agua que no mancha, mezclables entre si para uso escolar y art�stico.'
, 3.500, '60', 'Disponible');

--Block Base 30 Rotulado
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
17, 'Block Base 30 Rotulado' , 'El Block Base 30 Rotulado Sin Vencimiento de la marca Formas Futuro es la herramienta ideal para aquellos que buscan precisi�n y calidad.'
, 21.000, '70', 'Disponible');

--Agendas
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
18, 'Agendas' , 'Dise�o elegante y funcional, ideal para llevar a todas partes. Agenda permanente sin fecha para que puedas empezarla cuando quieras.'
, 20.000, '30', 'Disponible');

--Carpeta pl�stica
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
19, 'Carpeta pl�stica' , 'Carpeta pl�stica carta con bisel x 5 unidades de colores.'
, 9.900, '80', 'Disponible');

--Calculadora cientifica
INSERT INTO Productos (Id, Nombre, Descripcion, Precio, Cantidad, Estado) VALUES(
20, 'Calculadora cientifica' , 'Calculadora cientifica Casio ORIGINAL color negra. Elige la que m�s se adapte a ti: 240, 252 y 417 funciones.'
, 14.000, '35', 'Disponible');


--Desactivar para insertar datos
SET IDENTITY_INSERT Productos OFF;

