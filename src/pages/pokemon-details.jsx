import React from "react"
import { useParams } from "react-router-dom"

export const PokemonDetails = () => {
  const { id: pokemonId } = useParams()

  console.log('pokemonId', pokemonId)

  return (
    <div> Testing </div>

  )
}

