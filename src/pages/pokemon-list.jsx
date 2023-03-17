import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ListPokemon } from "../components/list-pokemon"

export const PokemonList = () => {
  return (
    <Container>
      <Row>
        <Col className="top-bar">
          <Link to="/">
            <i className="uil-arrow-left text-black"></i>
          </Link>
        </Col>
        <Col className="text-end top-bar">
          <Link to="#">
            <i className="uil-align-right text-black"></i>
          </Link>
        </Col>
      </Row>
      <h1>Pokedex</h1>
      <ListPokemon />
    </Container>
  )
}
