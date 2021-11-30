This is a backend part of fullstack forum example. Frontend part can be found [here](https://github.com/pencil-user/forum_prototype_frontend)

# Techologies used

* Node.js
* Express
* Custom validator [see here](https://github.com/pencil-user/Vvalidator)
* MySQL database
* Knex query builder

# Installation instructions:

Requirments:

* at least Node 14 
* MySQL 5.x database (not 8.x)

**backend:**

1. use forum_proj_dusan.sql file to create a MySQL database with test data 

2. go to backend folder and install necessary packages with "npm install" command

3. configure parameters in backend/config/default.json to match your database

4. run with "node ." in backend folder

------------------------

- Only admin can lock and pin threads. Only admin can delete and edit posts and threads not his own

- Anyone can delete or edit their own posts and threads, except anonymous posters

- It is possible to register, but admin needs to approve you so you may post

- Search only looks for threads (title and body) at the moment

Dušan Benašić dbenasic@zoho.com