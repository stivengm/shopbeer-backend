--CREATE DATABASE ShopBeer

Use ShopBeer

-------------------------------------------------------------------
CREATE TABLE Users(
	id INT IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(50),
	password VARCHAR(50),
	role VARCHAR(50),
	isAdmin BIT NOT NULL,
	isActive BIT NOT NULL
)

INSERT INTO Users VALUES('Stiven Gomez', 'TheSuperankes15', 'ADMIN', 1, 1)

-------------------------------------------------------------------

CREATE TABLE Discounts(
	id INT IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(50),
	description VARCHAR(500),
	codeDiscount VARCHAR(50),
	isActive BIT NOT NULL
)

INSERT INTO Discounts VALUES ('Descuento del 20%', 'Descuentos del 20% comprando desde 10 Six pack de póker', '10SIXPACK', 1)

-------------------------------------------------------------------

CREATE TABLE Categories(
	id INT IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(50),
	description VARCHAR(300),
	isActive BIT NOT NULL
)

CREATE TABLE Product(
	id int IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(50),
	image VARCHAR(500),
	description VARCHAR(300),
	price VARCHAR(50),
	isActive BIT NOT NULL,
	idCategory int NOT NULL,
	CONSTRAINT fk_Category FOREIGN KEY (idCategory) REFERENCES Categories (id),
)

-------------------------------------------------------------------

-- INSERTAR CATEGORÍAS

INSERT INTO Categories VALUES('Cervezas', 'Cervezas', 1)
INSERT INTO Categories VALUES('Ron', 'Ron', 1)
INSERT INTO Categories VALUES('Aguardiente', 'Aguardiente', 1)
INSERT INTO Categories VALUES('Wiskey', 'Wiskey', 1)
INSERT INTO Categories VALUES('Mecato', 'Mecato', 1)
INSERT INTO Categories VALUES('Otros', 'Otros', 1)

-- INSERTAR PRODUCTOS

INSERT INTO Product VALUES('Six Pack Cerveza Póker', 'img', 'Cerveza Póker con 355ML', '18000', 1, 1)
INSERT INTO Product VALUES('Cerveza Águila', 'img', 'Cerveza Águila con 355ML', '18000', 0, 1)
INSERT INTO Product VALUES('ClubColombia Dorada', 'img', 'ClubColombia Dorada con 355ML', '18000', 0, 1)
INSERT INTO Product VALUES('Aguardiene Antioqueño Rojo', 'img', 'Aguardiene Antioqueño Rojo', '40000', 1, 3)
INSERT INTO Product VALUES('Lucky', 'img', 'Cajetilla de cigarrillos Lucky', '4000', 1, 6)
INSERT INTO Product VALUES('TodoRico Personal', 'img', 'Paquete de TodoRico personal', '4000', 1, 6)


-------------------------------------------------------------------


SELECT * FROM Users
SELECT * FROM Discounts
SELECT * FROM Categories
SELECT * FROM Product

--DROP TABLE Users
--DROP TABLE Discounts
--DROP TABLE Categories
--DROP TABLE Product
