import React from "react"

export const PokemonList = () => {
  fetch(`${process.env.API_URL}/pokemons`)
    .then((res) => res.json())
    .then((data) => console.log(data))

  return (
    <div>PokemonList</div>
  )
}
