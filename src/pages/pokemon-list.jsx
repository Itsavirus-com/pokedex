import React from "react"
import { Col, Row, Button  } from "react-bootstrap"
import { logo } from "assets/images"
import "./pokemon-list.scss"
import List from "./components/list"

export const PokemonList = () => {
  fetch(`${process.env.API_URL}/pokemons`)
    .then((res) => res.json())
    .then((data) => console.log(data))

  return (
    <div className="pokemon-list">
      <Row>
        <div className="pokemon-header">
          <Col md={10} lg={10} xl={10} xxl={10}>
            <div className="pokemon-left">
              <img src={logo} />
              <h4>Pokemon</h4>
            </div>
          </Col>
          <Col md={2} lg={2} xl={2} xxl={2}>
            <div className="pokemon-right">
              <Button className="pokemon-right__left">Back</Button>
              <Button>Login</Button>
            </div>
          </Col>
        </div>
      </Row>
      <div className="pokemon-list__title">
        <h1>Pokedex</h1>
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}