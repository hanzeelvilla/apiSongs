# API DOCUMENTATION

This API allows users to manage a collection of songs.

## Features:
- List all songs in the collection.
- Retrieve details of a specific song by its ID.
- Add new songs with or without album cover images.
- Update existing song information.
- Delete songs from the collection.

## Prerequisites

1. Node.js: Ensure you have Node.js installed. Download Node.js

2. MySQL: Ensure you have MySQL installed and running. Download MySQL

3. Environment Variables: Create a .env file in the root of your project and add the following variables:

```
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_DIALECT=your_db_type
PORT=you_api_port
```

## Installation

1. Clone the Repository

```
git clone https://github.com/hanzeelvilla/apiSongs.git
```

2. Navigate to the Project Directory 

```
cd apiSongs
```

3. Install Dependencies

```
npm install
```

4. Create the db in MySql

```
create database DB_NAME;
```

## Running the API

1. Start the Server
```
npm start
```

2. Sync the Database

The API automatically syncs the database schema when it starts. This creates the necessary tables in your MySQL database.

## ENDPOINTS
* GET /api: Returns a welcome message.

* GET /api/songs: Retrieves a list of all songs.

* GET /api/songs/:id: Retrieves a specific song by ID.

* POST /api/songs: Creates a new song.

* PUT /api/songs/:id: Updates a specific song by ID.

* DELETE /api/songs/:id: Deletes a song by ID.

## Test the API

You can use the test_endpoints file if you have installed the extension REST Client from Visual Studio Code. Or try it out with tools like Postman or curl.

## Using REST Client in Visual Studio Code

1. Install REST Client Extension:
* Open Visual Studio Code.
* Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing Ctrl+Shift+X.
* Search for "REST Client" and install it.
2. Open test_endpoints.rest File:
* Navigate to the test_endpoints.rest file in your project.
* This file contains predefined HTTP requests to test your API.
3. Send Requests:
* Click on the "Send Request" link that appears above each request in the test_endpoints.http file to test the API endpoints.