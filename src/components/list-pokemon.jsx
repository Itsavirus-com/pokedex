import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CardPokemon } from "./card-pokemon";

export const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonLength, setPokemonLength] = useState(20);

  const API_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${API_URL}/pokemons?_page=1&_limit=${pokemonLength}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  }, [pokemonLength]);

  return (
    <>
      <Row>
        {pokemons.map((item, index) => (
          <Col key={index} xs={12} sm={6} xl={4}>
            <CardPokemon pokemon={item} />
          </Col>
        ))}
      </Row>
      <div className="load-more-wrapper">
        <div
          className="load-more"
          onClick={() => setPokemonLength(pokemonLength + 20)}
        >
          Load More
        </div>
      </div>
    </>
  );
};
