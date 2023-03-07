# republika-task

Simple Task Management

How to set up info :

1. Clone the project using git clone
2. After cloning make sure there are 2 folders (front-end -> task-manager) and (back-end -> task-manager-backend)
3. Open them in two visual codes windows (to start them in different ports) or whatever IDLE you are using

*** The backend is done using Laravel, the front end is done using NextJS and Typescript (bootstrap, tailwwind) ***

*** First set up the backend part beacuse there are the APIs endpoints that are used in front end
1. Install PHP and Composer: You need to have PHP and Composer installed on your system to run Laravel. You can download and install them from their respective websites.
2. Install Dependencies: In the Laravel project directory, run the following command to install the required dependencies:
    -> composer install
3. Set Up the Database: Create a database for your Laravel project and update the database credentials in the .env file. Laravel uses the .env file to store configuration values
4. Make sure the xampp server is running in different port and it is on
5. Run Migrations: Laravel comes with a built-in migration system that allows you to manage your database schema using PHP code. Run the following command to create the required tables in your database:
    -> php artisan migrate
6. Start the Server: You can start the Laravel development server by running the following command:
    -> php artisan serve  *This will start the server on http://localhost:8000.
7. Test the API: You can test the API by sending HTTP requests to the endpoints defined in your Laravel routes. You can use tools like Postman or cURL to send requests and receive responses. (POSTMAN exmp)


*** After above steps are working, you must continue now with the front end part so you can see what is going on:
1. Install the required dependencies for the front-end part. You can do this by running the following command in your terminal:
    -> npm install
2. Once the dependencies are installed, you can start the Next.js development server by running the following command:
    -> npm run dev
3. This will start the development server and you can now view your application by opening a browser and navigating to http://localhost:3000.
4. Now you are good to go

Enjoy :)
