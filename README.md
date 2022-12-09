# About #

## Requirements ##

## Install ##

1. NodeJS

2. npm install

3. Environment variables
    Some code variables are set in the process environment, through the ```dotnet``` npm package.
    The "env.example" file can be a resource for you create your own. Review the file to your values and rename it to ".env" (without quotes):

    - The RentX API backend will run on the HTTP localhost '3333' port. (eg. http://localhost:3333)
    - The JavaScript filesytem will use the folder "./tmp/" in the project root folder for temporary files.
    - Review ```ormconfig.example.json``` file to your settings and save as ```ormconfig.json```.

## DB Diagram ##

<!-- Add an image -->
<img src='.github/database-diagram.png' alt='database diagram' />