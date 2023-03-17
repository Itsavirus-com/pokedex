import React, {FunctionComponent} from "react"
import { Card, Col, Row  } from "react-bootstrap"
import { vector, image, fire } from "assets/images"
import "./list.scss"

export const List = () => {
    return (
      <Row className="pokemon-list__list">
        <Col md={3} lg={3} xl={3} xxl={3}>
          <Card className="pokemon-list__list--card">
            <h4 className="pokemon-list__list--title">Bullbasaur</h4>
            <div className="pokemon-list__list--type">
              <div className="pokemon-list__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-list__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-list__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-list__image">
              <img src={image} className="image"/>
            </div>
          </Card>
        </Col>
        <Col md={3} lg={3} xl={3} xxl={3}>
          <Card className="pokemon-list__list--card">
            <h4 className="pokemon-list__list--title">Ivysaur</h4>
            <div className="pokemon-list__list--type">
              <div className="pokemon-list__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-list__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-list__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-list__image">
              <img src={fire} className="image"/>
            </div>
          </Card>
        </Col>
				<Col md={3} lg={3} xl={3} xxl={3}>
          <Card className="pokemon-list__list--card">
            <h4 className="pokemon-list__list--title">Ivysaur</h4>
            <div className="pokemon-list__list--type">
              <div className="pokemon-list__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-list__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-list__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-list__image">
              <img src={fire} className="image"/>
            </div>
          </Card>
        </Col>
				<Col md={3} lg={3} xl={3} xxl={3}>
          <Card className="pokemon-list__list--card">
            <h4 className="pokemon-list__list--title">Ivysaur</h4>
            <div className="pokemon-list__list--type">
              <div className="pokemon-list__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-list__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-list__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-list__image">
              <img src={fire} className="image"/>
            </div>
          </Card>
        </Col>
      </Row>
    )
}

export default List