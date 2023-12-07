### Database

- You must have a MySQL server running locally with a database named as the project `arreglos_ya`
- On the .env file set your configs for your database (if you dont have a .env copy the .env_template file and rename to .env)
- Then run the next commands to update your database before execute the app

```bash
❯ export FLASK_APP=index # configura el archivo principal del entorno
❯ flask db upgrade # crea las tablas en la base de datos
```

- To revert the changes you can run

```bash
❯ flask db downgrade
```

- To create a new database table you must

- Create a new model on folder modules
- Import on the `api/models/**init**.py` file
- Import on the `api/app/**init**.py` file to become the model be accesible for all the app
- Then run on the terminal the following commands

```bash
❯ flask db migrate # To automatically create the migration field
❯ flask db upgrade # To commit changes to your database
```
