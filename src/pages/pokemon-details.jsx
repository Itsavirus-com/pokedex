import React, {useState}  from "react"
import { useParams } from "react-router-dom"
import { Col, Row, Button, Card  } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { logo, vector, image, man, women, btm, top  } from "assets/images"
import "./pokemon-details.scss"

export const PokemonDetails = () => {
  const { id: pokemonId } = useParams()

  console.log('pokemonId', pokemonId)

  const [key, setKey] = useState('stocks');

  return (
    <div className="pokemon-details">
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
      <Row className="card-details">
        <Col md={4} lg={4} xl={4} xxl={4}>
          <Card className="pokemon-details-top__list--card">
            <h4 className="pokemon-details-top__list--title">Ivysaur</h4>
            <div className="pokemon-details-top__list--type">
              <div className="pokemon-details-top__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-details-top__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-details-top__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-details-top__image">
              <img src={image} className="image"/>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="pokemon-details__bottom"
            >
              <Tab eventKey="stocks" title="Stocks" className="pokemon-details__bottom--details">
                <div className="top">
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Species</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">Seed</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Height</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">2’3.5” (0.70 cm)</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Weight</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">15.2 lbs (6.9 kg)</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Abilities</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">Overgrow, Chlorophyl</p>
                    </Col>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom__title">
                    <p>Breeding</p>
                  </div>
                  <div className="bottom__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>  
                      <p className="bottom__first--data">Species</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="bottom__first--data-two">
                        <div className="man">
                          <img src={man} />
                          <p>87.5%</p>
                        </div>
                        <div className="women">
                          <img src={women} />
                          <p>12.5%</p>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div className="bottom__second">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="bottom__first--data">Egg Groups</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="bottom__first--data-two">Monster</p>
                    </Col>
                  </div>
                  <div className="bottom__second">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="bottom__first--data">Egg Cycle</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="bottom__first--data-two">Grass</p>
                    </Col>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="stats" title="Base Stats" className="pokemon-details__bottom--base">
                <div className="top">
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">HP</p>
                            <p className="number">45</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Attack</p>
                            <p className="number-green">60</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Sp.Def</p>
                            <p className="number-green">66</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Sp.Atk</p>
                            <p className="number">48</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Speed</p>
                            <p className="number">45</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Total</p>
                            <p className="number-green">317</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom__title">
                    <p>Type defenses</p>
                  </div>
                  <div className="bottom__first">
                    <p className="bottom__first--data">The effectiveness of each type on Charmander</p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </Col>
        <Col md={4} lg={4} xl={4} xxl={4}>
          <Card className="pokemon-details-top__list--card">
            <h4 className="pokemon-details-top__list--title">Ivysaur</h4>
            <div className="pokemon-details-top__list--type">
              <div className="pokemon-details-top__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-details-top__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-details-top__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-details-top__image">
              <img src={image} className="image"/>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="pokemon-details__bottom"
            >
              <Tab eventKey="stocks" title="Stocks" className="pokemon-details__bottom--details">
                <div className="top">
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Species</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">Seed</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Height</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">2’3.5” (0.70 cm)</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Weight</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">15.2 lbs (6.9 kg)</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Abilities</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">Overgrow, Chlorophyl</p>
                    </Col>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom__title">
                    <p>Breeding</p>
                  </div>
                  <div className="bottom__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>  
                      <p className="bottom__first--data">Species</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="bottom__first--data-two">
                        <div className="man">
                          <img src={man} />
                          <p>87.5%</p>
                        </div>
                        <div className="women">
                          <img src={women} />
                          <p>12.5%</p>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div className="bottom__second">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="bottom__first--data">Egg Groups</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="bottom__first--data-two">Monster</p>
                    </Col>
                  </div>
                  <div className="bottom__second">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="bottom__first--data">Egg Cycle</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="bottom__first--data-two">Grass</p>
                    </Col>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="stats" title="Base Stats" className="pokemon-details__bottom--base">
                <div className="top">
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">HP</p>
                            <p className="number">45</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Attack</p>
                            <p className="number-green">60</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Sp.Def</p>
                            <p className="number-green">66</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Sp.Atk</p>
                            <p className="number">48</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Speed</p>
                            <p className="number">45</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Total</p>
                            <p className="number-green">317</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom__title">
                    <p>Type defenses</p>
                  </div>
                  <div className="bottom__first">
                    <p className="bottom__first--data">The effectiveness of each type on Charmander</p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </Col>
        <Col md={4} lg={4} xl={4} xxl={4}>
          <Card className="pokemon-details-top__list--card">
            <h4 className="pokemon-details-top__list--title">Ivysaur</h4>
            <div className="pokemon-details-top__list--type">
              <div className="pokemon-details-top__list--type-one">
                <p>Grass</p>
              </div>
              <div className="pokemon-details-top__list--type-two">
                <p>Poison</p>
              </div>
            </div>
            <div className="pokemon-details-top__vector">
              <img src={vector} className="vector"/>
            </div>
            <div className="pokemon-details-top__image">
              <img src={image} className="image"/>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="pokemon-details__bottom"
            >
              <Tab eventKey="stocks" title="Stocks" className="pokemon-details__bottom--details">
                <div className="top">
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Species</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">Seed</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Height</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">2’3.5” (0.70 cm)</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Weight</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">15.2 lbs (6.9 kg)</p>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="top__first--data">Abilities</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="top__first--data-two">Overgrow, Chlorophyl</p>
                    </Col>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom__title">
                    <p>Breeding</p>
                  </div>
                  <div className="bottom__first">
                    <Col md={5} lg={5} xl={5} xxl={5}>  
                      <p className="bottom__first--data">Species</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="bottom__first--data-two">
                        <div className="man">
                          <img src={man} />
                          <p>87.5%</p>
                        </div>
                        <div className="women">
                          <img src={women} />
                          <p>12.5%</p>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div className="bottom__second">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="bottom__first--data">Egg Groups</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="bottom__first--data-two">Monster</p>
                    </Col>
                  </div>
                  <div className="bottom__second">
                    <Col md={5} lg={5} xl={5} xxl={5}>
                      <p className="bottom__first--data">Egg Cycle</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <p className="bottom__first--data-two">Grass</p>
                    </Col>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="stats" title="Base Stats" className="pokemon-details__bottom--base">
                <div className="top">
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">HP</p>
                            <p className="number">45</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Attack</p>
                            <p className="number-green">60</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Sp.Def</p>
                            <p className="number-green">66</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Sp.Atk</p>
                            <p className="number">48</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                  <div className="top__first">
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Speed</p>
                            <p className="number">45</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} xxl={6}>
                      <div className="top__first--hp">
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--left">
                            <p className="title">Total</p>
                            <p className="number-green">317</p>
                          </div>
                        </Col>
                        <Col md={6} lg={6} xl={6} xxl={6}>
                          <div className="top__first--right-green">
                            <img src={btm} />
                          </div>
                        </Col>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="bottom">
                  <div className="bottom__title">
                    <p>Type defenses</p>
                  </div>
                  <div className="bottom__first">
                    <p className="bottom__first--data">The effectiveness of each type on Charmander</p>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
