## Pokedex

### Getting Started
Install the dependencies and start the server with:
```sh
yarn install
yarn start
```

The script above will start the api and development server on:
```sh
API: http://localhost:3000
Frontend: http://localhost:1234
```

### API
#### Get all pokemons
```sh
http://localhost:3000/pokemons
```

#### Get pokemons with pagination
```sh
http://localhost:3000/pokemons?_page=7&_limit=20
```

#### Get a specific pokemon
```sh
http://localhost:3000/:pokemon-id
example: http://localhost:3000/100
```
