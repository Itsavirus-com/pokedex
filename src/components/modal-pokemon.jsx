import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const ModalPokemon = (props) => {
  const { selectedPokemon } = props;
  const [isMenuTypeStock, setIsMenuTypeStock] = useState(true);

  function sum(obj) {
    return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
  }
  return (
    <div className="pokemon-details-modal">
      <Row className="pokemon-details-menu">
        <Col xs={4}>
          <h3 onClick={() => setIsMenuTypeStock(true)}>Stocks</h3>
          <hr />
        </Col>
        <Col xs={8}>
          <h3 onClick={() => setIsMenuTypeStock(false)}>Base Stats</h3>
          <hr />
        </Col>
      </Row>

      {isMenuTypeStock && (
        <>
          <Row>
            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Species</h5>
            </Col>
            <Col xs={8}>
              <h5>Seed</h5>
            </Col>

            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Height</h5>
            </Col>
            <Col xs={8}>
              <h5>2’3.6” (0.70 cm)</h5>
            </Col>

            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Weight</h5>
            </Col>
            <Col xs={8}>
              <h5>15.2 lbs (6.9 kg)</h5>
            </Col>

            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Abilities</h5>
            </Col>
            <Col xs={8}>
              <h5>Overgrow, Chlorophyl</h5>
            </Col>
          </Row>

          <Row className="mt-4">
            <h5 className="mb-3 text-black fw-bold">Breeding</h5>

            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Species</h5>
            </Col>
            <Col xs={8}>
              <h5>Seed</h5>
            </Col>

            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Egg Groups</h5>
            </Col>
            <Col xs={8}>
              <h5>Monster</h5>
            </Col>

            <Col xs={4}>
              <h5 className="pokemon-details-menu-title">Egg Cycle</h5>
            </Col>
            <Col xs={8}>
              <h5>Grass</h5>
            </Col>
          </Row>
        </>
      )}

      {!isMenuTypeStock && (
        <>
          <Row>
            <Col xs={6}>
              <div className="base-card">
                <h3>HP</h3>
                <h3>{selectedPokemon?.base?.hp}</h3>
              </div>
            </Col>

            <Col xs={6}>
              <div className="base-card">
                <h3>Attack</h3>
                <h3>{selectedPokemon?.base?.attack}</h3>
              </div>
            </Col>

            <Col xs={6}>
              <div className="base-card">
                <h3>Sp. Atk</h3>
                <h3>{selectedPokemon?.base?.sp_attack}</h3>
              </div>
            </Col>

            <Col xs={6}>
              <div className="base-card">
                <h3>Sp. Def</h3>
                <h3>{selectedPokemon?.base?.sp_defense}</h3>
              </div>
            </Col>

            <Col xs={6}>
              <div className="base-card">
                <h3>Speed</h3>
                <h3>{selectedPokemon?.base?.speed}</h3>
              </div>
            </Col>

            <Col xs={6}>
              <div className="base-card">
                <h3>Total</h3>
                <h3>{sum(selectedPokemon?.base)}</h3>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
