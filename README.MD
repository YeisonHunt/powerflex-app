
Sprocket Factory API
==============

This is a RESTful API for managing sprocket factory data and sprockets, built with Node.js and PostgreSQL.

## Prerequisites

- Node.js (v16 or later)
- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/sprocket-factory-api.git
cd sprocket-factory-api
```


2. Build the Docker images:

```bash
docker-compose build
```

3. Start the Docker containers:

```bash
docker-compose up -d
```

## Important step 👀


4. Seed the database with sample data:
```bash
docker exec -it powerflex-app-1 npm run seed
```

Here `powerflex-app-1` it's the app name for our node server.
If for some reason this is not the app name generated for you, please use this command to get the name:

```bash
docker ps
```

That will list the docker instance running and you can extract the one running on port 3000.
![docker app name](https://i.ibb.co/4RM6mfb/docker.png)

## How to use?

### Docs on Swagger

I put good effort on make good docs, that's the way I work, it's really easy to understand APIs on this way. 💝


You can test all the endpoints there with the Swagger UI.

▶️ http://localhost:3000/docs  ◀️ 

The application will be running at http://localhost:3000.
API Endpoints

Factories

```
GET /api/factories - Get all factories
GET /api/factories/:id - Get a factory by ID
```

Sprockets

```
GET /api/sprockets - Get all sprockets
GET /api/sprockets/:id - Get a sprocket by ID
POST /api/sprockets - Create a new sprocket
PUT /api/sprockets/:id - Update a sprocket by ID
```


## Stopping the Application

To stop the application and remove the containers, run:

```bash
docker-compose down
```
If you want to remove the volumes (including the PostgreSQL data) as well, use:

```bash
docker-compose down -v
```
Development
If you want to run the application without Docker for development purposes, follow these steps:

Make sure you have PostgreSQL installed and running on your local machine.

1. Create a new PostgreSQL database for the application.

2. Replace your .env values from your current PostgresSQL DB instance.


3. Start the application:
    ```bash
    npm start
    ```
4. Seed your DB:
    ```bash
      npm run seed
    ```

The application will be running at http://localhost:3000.

## Requests examples to run on your terminal [curl] if you dont like Swagger 

An endpoint that returns all sprocket factory data
```bash
curl http://localhost:3000/api/factories
```
An endpoint that returns factory data for a given factory id

```bash
curl http://localhost:3000/api/factories/1
```

Replace 1 with the desired factory ID.

An endpoint that returns sprockets for a given id

```bash
curl http://localhost:3000/api/sprockets/2
```
Replace 2 with the desired sprocket ID.

An endpoint that will create a new sprocket

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "teeth": 6,
  "pitchDiameter": 6.5,
  "outsideDiameter": 7.2,
  "pitch": 1.25
}' http://localhost:3000/api/sprockets
```
This command sends a POST request with a JSON payload containing the data for the new sprocket.

An endpoint that will update a sprocket for a given id

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "teeth": 8,
  "pitchDiameter": 7.8,
  "outsideDiameter": 9.0,
  "pitch": 1.5
}' http://localhost:3000/api/sprockets/3
```
