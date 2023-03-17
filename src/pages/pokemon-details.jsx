import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  backWH,
  bg,
  detailOne,
  detailTwo,
  female,
  love,
  male,
} from "../assets/images";
import { Rate } from "../components/rate";

export const PokemonDetails = () => {
  const { id: pokemonId } = useParams();

  console.log("pokemonId", pokemonId);

  const [index, setIndex] = useState(0);

  return (
    <>
      <img src={bg} className="pd__bg-img" />
      <div className="pd">
        <div className="pd__wrapper-top" hidden={index !== 0}>
          <div className="pd__header">
            <Link to="/pokemons">
              <img src={backWH} />
            </Link>
            <img src={love} />
          </div>
          <h1>Bullbasaur</h1>
          <div className="pd__wrapper-top__title">
            <p>Grass</p>
            <p>Poison</p>
          </div>
          <div className="pd__wrapper-top__img">
            <img src={detailOne} />
          </div>
        </div>

        <div className="pd__wrapper-top-red" hidden={index !== 1}>
          <div className="pd__header">
            <Link to="/pokemons">
              <img src={backWH} />
            </Link>
            <img src={love} />
          </div>
          <h1>Charmander</h1>
          <div className="pd__wrapper-top-red__title">
            <p>Fire</p>
          </div>
          <div className="pd__wrapper-top-red__img">
            <img src={detailTwo} />
          </div>
        </div>
        <div className="pd__wrapper-bot">
          <div className="pd__position">
            <div className="pd__wrapper-bot__top"></div>
          </div>
          <div className="pd__tab-section">
            <h1
              className={`pd  ${index === 0 ? "active" : null}`}
              onClick={() => {
                setIndex(0);
              }}
            >
              Stocks
            </h1>
            <h1
              className={`pd  ${index === 1 ? "active" : null}`}
              onClick={() => {
                setIndex(1);
              }}
            >
              Base Stats
            </h1>
          </div>
          <div hidden={index !== 0}>
            <div className="pd__tab-section__body col-12">
              <div className="pd__name col-4">
                <h1>Species</h1>
                <h1>Height</h1>
                <h1>Weight</h1>
                <h1>Abilities</h1>
              </div>
              <div className="pd__desc col-6">
                <h1>Seed</h1>
                <h1>2’3.6” (0.70 cm)</h1>
                <h1>15.2 lbs (6.9 kg)</h1>
                <h1>Overgrow, Chlorophyl</h1>
              </div>
            </div>
            <div className="pd__tab-section">
              <h1>Breeding</h1>
            </div>
            <div className="pd__tab-section__body col-12">
              <div className="pd__name col-4">
                <h1>Species</h1>
                <h1>Egg Groups</h1>
                <h1>Egg Cycle</h1>
              </div>
              <div className="pd__desc col-8">
                <div className="pd__desc__gender">
                  <div className="pd__desc__gender__position">
                    <img src={male} />
                    <p> 87.5%</p>
                  </div>
                  <div className="pd__desc__gender__position">
                    <img src={female} />
                    <p>12.5%</p>
                  </div>
                </div>
                <h1>Monster</h1>
                <h1>Grass</h1>
              </div>
            </div>
          </div>

          <div hidden={index !== 1}>
            <div className="pd__tab-section__body col-12">
              <div className="pd__name col-4">
                <h1>HP</h1>
                <h1>Attack</h1>
                <h1>Sp. Atk</h1>
                <h1>Sp. Def</h1>
                <h1>Speed</h1>
                <h1>Total</h1>
              </div>
              <div className="pd__desc col-8">
                <h1 className="pd__rate">
                  45
                  <Rate rate="45" />
                </h1>
                <h1 className="pd__rate">
                  60
                  <Rate rate="60" />
                </h1>
                <h1 className="pd__rate">
                  48
                  <Rate rate="48" />
                </h1>
                <h1 className="pd__rate">
                  66
                  <Rate rate="66" />
                </h1>
                <h1 className="pd__rate">
                  45
                  <Rate rate="45" />
                </h1>
                <h1 className="pd__rate">
                  317
                  <Rate rate="80" />
                </h1>
              </div>
            </div>
            <div className="pd__title-desc">
              <h1>Type defenses</h1>
              <p>The effectiveness of each type on Charmander</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
