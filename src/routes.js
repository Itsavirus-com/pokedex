import { useRoutes } from 'react-router-dom'

import { Login } from 'pages/login'
import { PokemonList } from 'pages/pokemon-list'
import { PokemonDetails } from 'pages/pokemon-details'

export const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/pokemons',
      element: <PokemonList />,
    },
    {
      path: '/pokemons/:id',
      element: <PokemonDetails />,
    },
  ])
}
