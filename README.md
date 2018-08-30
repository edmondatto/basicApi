## Basic CRUD API 
This is a basic API for a note-taking App.

### Technologies
This API is built using 
 - NodeJS
 - Express
 - MongoDB
 
### App Structure

    basicApi
        |- App
        |   |- routes
        |   |    |- index.js
        |   |    |- notesRoutes.js
        |
        |- config
        |  |- db.js
        |
        |- .gitignore
        |- package.json
        |- README.md
        |- server.js
        |- yarn.lock
        
### Setting up the local environment
Clone the repository
```commandline
git clone https://github.com/edmondatto/basicApi.git
```

Install dependencies
```commandline
yarn install
```

Run the development server and navigate to `http://localhost:3000`
```commandline
yarn run dev
```

### Endpoints

- `GET /notes/:id`: Get a note by passing the API its ID
- `GET /notes/`: Get all notes
- `POST /notes/`: Create a new note by passing the API a title and body text
- `PUT /notes/:id`: Update a particular note. Requires you to pass a note id
- `DELETE /notes/:id`: Delete a particular note