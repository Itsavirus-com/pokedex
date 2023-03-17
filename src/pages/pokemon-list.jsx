import React, { useState } from "react"
import { Col,Row } from "react-bootstrap"
import { useParams,Link } from "react-router-dom"
import { bullbasur, charmander, pikachu, squirtel } from "../assets/images"

import { ListPokemon } from "../components/list-pokemon"

export const PokemonList = () => {
  const { name: pokemonName } = useParams()
  const { id: pokemonId } = useParams()
  const { image: pokemonImage } = useParams()
  const { type: pokemonType } = useParams()

  // const [dataPokemon, setDataPokemon]= useState()

  fetch(`${process.env.API_URL}/pokemons`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    // .then((data) => setDataPokemon(data))


  return (
    <div className="mx-3 py-3">
      <div className="d-flex justify-content-between">
        <h4><i className=" uil-arrow-left"></i></h4>
        <h4><i className="uil-align-right"></i></h4>
      </div>
      <h2 className="fw-bold mt-3 mb-3">Pokedex</h2>
      <Row md={6}>
      {/* {setDataPokemon.map(() => (
        <Col xs={6} md={4} key={dataPokemon.id}>
          <ListPokemon
            name={dataPokemon.name}
            type={dataPokemon.type}
            image={dataPokemon.image}
            color='bg-hijau'
          />
        </Col>
       ))} */}
        <Col xs={6} md={4}>
          <Link to='/details' >
            <ListPokemon
              name='Bullbasaur'
              type={['Grass', ' Poison']}
              color="hijau"
              image={bullbasur}
            />
          </Link>
        </Col>
        <Col xs={6} md={4}>
          <ListPokemon
            name='Charmander'
            type={['Fire']}
            color='merah'
            image={charmander}
          />
        </Col>
        <Col xs={6} md={4}>
          <ListPokemon
            name='Squirtle'
            type={['Water']}
            color='biru'
            image={squirtel}
          />
        </Col>
        <Col xs={6} md={4}>
          <ListPokemon
            name='Pikachu'
            type={['Electric']}
            color='kuning'
            image={pikachu}
          />
        </Col>
      </Row>
    </div>
  )
}
