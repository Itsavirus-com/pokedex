import React, { useState } from "react"
export const PokemonList = () => {
  const [pokemons, setPokemons] = useState()
  fetch(`${process.env.API_URL}/pokemons`)
    .then((res) => res.json())
    .then((data) => setPokemons(data))

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemons?.map((item, index) => (
          <>
          <div>{item.name.english}</div>
          <h1>{item.id}</h1>
          <div> HP = {item.base.hp}</div>
          <div> "attack"{item.base.attack}</div>
          </>
        ))}
      </div>
    </div>
  )
}

