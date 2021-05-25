


DROP database if exists Delilah2;
CREATE database Delilah2;
USE Delilah2;

DROP TABLE IF EXISTS `USERS`;
DROP TABLE IF EXISTS `ORDERS`;
DROP TABLE IF EXISTS `FOODPLATES`;
DROP TABLE IF EXISTS `ROLES`;
DROP TABLE IF EXISTS `ORDERS_FOODPLATES`;




CREATE TABLE `ROLES` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL
);

INSERT INTO roles(name) VALUES
    ('Admin'),('User');


CREATE TABLE `USERS` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `nickname` VARCHAR(50) NOT NULL UNIQUE,
    `name` VARCHAR(70) NOT NULL,
    `email` VARCHAR(80) NOT NULL UNIQUE,
    `phonenumber` VARCHAR(15) NOT NULL,
    `adress` VARCHAR(70) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `roleId` INTEGER NOT NULL DEFAULT  2,
    FOREIGN KEY (roleId) REFERENCES ROLES (id) 
);



INSERT INTO users(nickname,name,email,phonenumber,adress,password,roleId) VALUES
    ('hellenbab', 'Hellen Nicolle', 'mycycle@hotmail.com','15648948','Bogota las Américas piso2 apt 301', 'melo123',2),
    ('tsweetheart','daniel carvajal', 'daniel@hotmail.com','5464564','Bucaramanga Santander Holliday inn apt 503', 'sara12', 1);


CREATE TABLE `STATES`(
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(40) NOT NULL 
);

INSERT INTO `STATES`(`name`) VALUES ('Pending'),('Sent') ,('Cancelled'),('Received');


CREATE TABLE `FOODPLATES` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(70) NOT NULL,
    `price` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `img` VARCHAR(80) NOT NULL
);


INSERT INTO foodplates (name,price,description, img) VALUES
    ('Lasagna Méxicana en salsa de pollo', 25, 'Deliciosa Lasagna mixta méxicana con toque de picante y verduras', 'https://source.unsplash.com/500x500/?lasagna'),
    ('Hamburguesa de la casa', 10, 'Hamburguesa triple carne con doble queso y verduras acompañada de cascos fritos', 'https://source.unsplash.com/500x500/?hamburguesa'),
    ('Arroz chino', 20,' Bowl de arroz chino con pollo, carne, cerdo, verduras, maiz, y raices chinas', 'https://source.unsplash.com/500x500/?arrozchino'),
    ('Calamar al vapor con caldo de sirena', 45, 'El don de cada sirena es encantar a los demás', 'https://source.unsplash.com/500x500/?calamar'),
    ('Huevo frito con sal', 8, 'Delicioso huevo semicocido con especias', 'https://source.unsplash.com/500x500/?huevo'),
    ('Croquetas de pollo con mordiscos de pejelagarto', 30, ' te aseguramos una experiencia inolvidable', 'https://source.unsplash.com/500x500/?croquetas');


CREATE TABLE `ORDERS` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `total` INTEGER NOT NULL,
    `payMethod` VARCHAR(40) NOT NULL,
    `userId` INTEGER NOT NULL,
    `stateId` INT NOT NULL DEFAULT 1,
    FOREIGN KEY (userId) REFERENCES USERS (id),
    FOREIGN KEY (stateId) REFERENCES STATES (id)
);

INSERT INTO ORDERS (total, payMethod,userId) VALUES 
    (115, 'Paypal', 1),
    (560, 'Paypal', 2);

CREATE TABLE `ORDERPLATES` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `orderId` INTEGER NOT NULL,
    `plateId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    FOREIGN KEY (plateId) REFERENCES FOODPLATES (id),
    FOREIGN KEY (orderId) REFERENCES ORDERS (id)
);


INSERT INTO ORDERPLATES (orderId ,plateId,quantity) VALUES 
    (1, 1, 3), (1 ,2, 4),
    (2, 3, 1), (2, 5, 12);


