import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { back, menu } from "../assets/images";

import { CardList } from "../components/card";
import { PokemonDataPokemon } from "./data.props";

import images from "../assets/images";

import "./style.scss";
export const PokemonList = () => {
  fetch(`${process.env.API_URL}/pokemons`)
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="pl">
      <div className="pl__header">
        <Link to="/">
          <img src={back} />
        </Link>
        <img src={menu} />
      </div>
      <div className="pl__body">
        <h1 className="pl__body">Pokedex</h1>
        <Row>
          {PokemonDataPokemon.map((item, index) => [
            <Col xs={6} sm={6}>
              <Link to={{ pathname: "/pokemons/:id", state: item }}>
                <CardList
                  name={item.name}
                  skill1={item.skill1}
                  skill2={item.skill2}
                  color={item.color}
                  skillColor={item.color}
                  img={item.img}
                  showSkill2
                />
              </Link>
            </Col>,
          ])}
        </Row>
      </div>
    </div>
  );
};
