# Kerala COVID19
https://the-jin-799.github.io/Kerala-COVID19/

------------


A simple website made using React for front end and Django for the backend.

## What it does?
The website shows the basic total report and today's report of COVID19 in Kerala (a state in India).

## How does the website work?
The frontend of the website is done using a Javascript library called React. No external styling components or UI libraries are used. Everything is styled using basic CSS.

Backend is done using Django where a database is set up which store values of people confirmed positive, recovered and died on that day. The data values are updated per official Kerala government records. REST API is setup from the database from which the values are fetched to the website. The Django is hosted using PythonEveryWhere.

## For developers
You can fork and clone this repository and create some changes with a database of your own data and can make a COVID19 report website for your own state or place. 

## Set up React development enviornment from this repository
Hope you have [node](https://nodejs.org/en/ "node") and [create-react-app](https://github.com/facebook/create-react-app "create-react-app") installed.

Clone repository to your PC. React files are in **keralacovid19** folder.
You have to install node modules in that folder. For that open terminal there and run:

`npm install`

You can see a folder **node modules** and file **package-lock.json** if node modules have succesfully installed. To run the project, on terminal run:

`npm start`

This will start a local development server [localhost:3000](http://localhost:3000/ "localhost:3000") on  your browser. Now you can make your changes on the component files inside **src** directory.

## Set up Django backend from this repository
Hope you have [python virtual environment](https://docs.python.org/3/tutorial/venv.html) installed. Create a virtual environment with python3 (make sure that python version is not 3.7, as django is not stable in python3.7). I recomend python3.8 . To install necessary python packages (django, djangorestframework, django-cors-headers), in your virtual environment run:

`pip install django djangorestframework django-cors-headers`

Clone repository to your PC. django files are in **keraladata** folder.
Change the working directory in the virtual environment to **keraladata**.
Make sure that there is manage.py file in **keraladata**. In virtual environment run:

`python manage.py makemigrations`

and

`python manage.py migrate`

This will create necessary database files. To create admin user (to manage database in project's admin page), in the virtual environment run:

`python manage.py createsuperuser`

To start the local development server, in virtual environment run:

`python manage.py runserver`

This will start a local development server [localhost:8000](http://localhost:8000/ "localhost:8000") on  your browser.In **keraladata** folder you can find links.txt file. It contains all important url paths in this backend (it has no home page so [localhost:8000](http://localhost:8000/ "localhost:8000") will give error, you should append it with relevent paths eg [localhost:8000/admin](http://localhost:8000/admin) for admin page).
