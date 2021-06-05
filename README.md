# Deliláh Resto


>Every journey start with a small or big step, and for me this has been one of the main approaches to the back-end world 

Delilah Restó is a REST API for a restaurant business 🥘 in which the clients (users) can register and order the most deluxe plates. On the other hand, the administrator can manage the orders,  the plates and the users of the API.

## Getting started   🚀

### Technologies

The project was built using :
- **Npm** v. 7.12.1
- **Node** v. 16.1.0 (ES6 modules)
- **MYSQL server** 8.0

### Dependences

- **Dotenv** 9.0.0
- **Express**  4.17.1
-  **Express-validator** 6.11.1
- **Jsonwebtoken** 8.5.1
-  **Mysql2** 2.2.5
-  **Sequelize** 6.6.2
- **Nodemon** (Recommended for testing agility)

<br>

##    1  ---  S    T    E     P

**Clone the project**, **open the master branch** and** install the required dependences** with the following code 

```shell
npm i dotenv express express-validator jsonwebtoken mysql2 sequelize
``` 
Develop dependence (recommended)

```shell
npm init nodemon --save-dev
```


<br>

##     2  ---  S    T    E     P

**Initialize the mysql server**, you can use both mysql server or xampp, or other method analogous. Then, create a new database with the name of your preference, we will use "delilah" in the example name above. You can create the database in the graphic interface or by shell.

```sql
create database delilah;
use delilah;
```

<br>

##     3  ---  S    T    E     P

Create a **.env**   file based in the example.env in which you'll set the connection to the database as well as the secret-key for the tokens. In the example.env you'll find an example of token secret key

##     4  ---  S    T    E     P

**Run the npm run start **command , it will initialize the server, and as long as we're using an ORM it'll create the tables as well as default data (1 user, 1 Admin user,  plates, and other default insertions)


## Documentation 

Checkout the swagger documentation in https://app.swaggerhub.com/apis/tsweetheart/delilah-resto/1.0.0

<br>

> You are good to go, thank you Protalento and Acámica for the amazing experience of this sprints :)
~ Daniel Carvajal
