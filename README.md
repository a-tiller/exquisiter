# Exquisiter

> This is a collaborative storytelling application based on the classic 'exquisite corpse' round robin storytelling game. It leverages a graph database to reimagine a linear collaborative narrative as a branching hypertext.

## Table of Contents


1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

- Node 12.0.0
- Neo4j 4.0.5

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

Create a `.env` file in the root directory:
```
PORT=[THE PORT YOU WANT THE EXPRESS SERVER TO RUN ON]
DB_USER=[YOUR NEO4J USER]
DB_PASS=[THAT USER'S PASSWORD]
```

The web interface currently assumes the existence of a root node, so you will want to seed your narrative either using the API below or by making a query in your Neo4j shell like:

```sh
CREATE (a:LINE {text: "It was a dark and stormy night"}) RETURN a;
```

Then build the js bundle:

```sh
npm run build-production
```

Then to start the server:

```sh
npm start
```

### API

|  Method      |  Endpoint                           |  Action                                                |
| ------------ | ----------------------------------- | ------------------------------------------------------ |
|  **POST**    |  /api/from/*node*                   |  Adds a line to the story branching from *node*.       |
|  **POST**    |  /api/root                          |  Add a line that creates a new story.                  |
|  **GET**     |  /api/node/*node*                   |  Retrieves the line at *node*.                         |
|  **GET**     |  /api/random                        |  Retrieves a random line.                              |
|  **GET**     |  /api/*root*/to/*node*              |  Retrieves a traversal from *root* to *node*.          |