import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom"
import { ModalPokemon } from "../components/modal-pokemon";

export const PokemonDetails = () => {
  const API_URL = process.env.API_URL

  const { id } = useParams()
  const [selectedPokemon, setSelectedPokemon] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API_URL}/pokemons/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw(res.statusText)
      })
      .then((data) => setSelectedPokemon(data))
      .catch((error) => {
        if(error === 'Not Found') return navigate('/pokemons')
      })
  }, [])

  return (
    <div className={`bg-${selectedPokemon?.type[0].toLowerCase()}`}>
      <Container>
        <Row>
          <Col className="top-bar">
            <Link to="/pokemons">
              <i className="uil-arrow-left text-white"></i>
            </Link>
          </Col>
          <Col className="text-end top-bar">
            <Link to="#">
              <i className="uil-heart text-white"></i>
            </Link>
          </Col>
        </Row>
        <div className="pokemon-details-wrapper">
          <div className="text-white">
            <h2>{selectedPokemon?.name?.english}</h2>
            <div className="pokemon-details-type-wrapper">
              {selectedPokemon?.type?.map((item, index) => (
                <span key={index} className={`pokemon-details-type bg-${selectedPokemon.type[0].toLowerCase()}-type`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="pokemon-details-image">
            <img src={`${API_URL}${selectedPokemon?.image}`} alt={selectedPokemon?.name?.english} />
          </div>
        </div>
      </Container>
      <ModalPokemon  selectedPokemon={selectedPokemon}/>
    </div>
  )
}
