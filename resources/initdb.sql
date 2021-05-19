


DROP database if exists Delilah;
CREATE database Delilah;
USE Delilah;

DROP TABLE IF EXISTS `USERS`;
DROP TABLE IF EXISTS `ORDERS`;
DROP TABLE IF EXISTS `FOODPLATES`;
DROP TABLE IF EXISTS `ROLES`;
DROP TABLE IF EXISTS `ORDERS_FOODPLATES`;




CREATE TABLE `ROLES` (
    `Id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(30) NOT NULL
);

INSERT INTO roles(Name) VALUES
    ('Admin'),('User');


CREATE TABLE `USERS` (
    `User_Id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Nickname` VARCHAR(50) NOT NULL UNIQUE,
    `Name` VARCHAR(70) NOT NULL,
    `Email` VARCHAR(80) NOT NULL UNIQUE,
    `Phonenumber` VARCHAR(15) NOT NULL,
    `Adress` VARCHAR(70) NOT NULL,
    `Password` VARCHAR(50) NOT NULL,
    `RoleId` INTEGER NOT NULL DEFAULT  2,
    FOREIGN KEY (RoleId) REFERENCES ROLES (Id) 
);



INSERT INTO users(Nickname,Name,Email,Phonenumber,Adress,Password,RoleId) VALUES
    ('hellenbab', 'Hellen Nicolle', 'mycycle@hotmail.com','15648948','Bogota las Américas piso2 apt 301', 'melo123',2),
    ('tsweetheart','daniel carvajal', 'daniel@hotmail.com','5464564','Bucaramanga Santander Holliday inn apt 503', 'sara12', 1);


CREATE TABLE `STATES`(
    `Id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(40) NOT NULL 
);

INSERT INTO `STATES `(`Name`) VALUES ('En preparacion'),( 'Enviado') ,('Entregado'),('Cancelado');


CREATE TABLE `ORDERS` (
    `Order_Id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Total` INTEGER NOT NULL,
    `Paymethod` VARCHAR(40) NOT NULL,
    `UserId` INTEGER NOT NULL,
    `State` INT NOT NULL DEFAULT 1,
    FOREIGN KEY (UserId) REFERENCES USERS (User_Id),
    FOREIGN KEY (State) REFERENCES STATES (Id)
);



CREATE TABLE `FOODPLATES` (
    `Plate_Id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `Name` VARCHAR(70) NOT NULL,
    `Price` INTEGER NOT NULL,
    `Description` TEXT NOT NULL,
    `Img` VARCHAR(80) NOT NULL
);


INSERT INTO foodplates (Name,Price,Description, Img) VALUES
    ('Lasagna Méxicana en salsa de pollo', 25, 'Deliciosa Lasagna mixta méxicana con toque de picante y verduras', 'https://source.unsplash.com/500x500/?lasagna'),
    ('Hamburguesa de la casa', 10, 'Hamburguesa triple carne con doble queso y verduras acompañada de cascos fritos', 'https://source.unsplash.com/500x500/?hamburguesa'),
    ('Arroz chino', 20,' Bowl de arroz chino con pollo, carne, cerdo, verduras, maiz, y raices chinas', 'https://source.unsplash.com/500x500/?arrozchino'),
    ('Calamar al vapor con caldo de sirena', 45, 'El don de cada sirena es encantar a los demás', 'https://source.unsplash.com/500x500/?calamar'),
    ('Huevo frito con sal', 8, 'Delicioso huevo semicocido con especias', 'https://source.unsplash.com/500x500/?huevo'),
    ('Croquetas de pollo con mordiscos de pejelagarto', 30, ' te aseguramos una experiencia inolvidable', 'https://source.unsplash.com/500x500/?croquetas');


CREATE TABLE `ORDERS_FOODPLATES` (
    OrdersFoodplatesId INT AUTO_INCREMENT PRIMARY KEY,
    `OrderId` INTEGER NOT NULL,
    `PlateId` INTEGER NOT NULL,
    `Quantity` INTEGER NOT NULL,
    FOREIGN KEY (PlateId) REFERENCES FOODPLATES (Plate_Id),
    FOREIGN KEY (OrderId) REFERENCES ORDERS (Order_Id)
) AUTO_INCREMENT = 1000 ;
