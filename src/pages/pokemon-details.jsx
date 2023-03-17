import React from "react"
import { useParams } from "react-router-dom"
import { bullbasaurMd } from "../assets/images"
import { DetailsPokemon } from "../components/details-pokemon"

export const PokemonDetails = () => {
  const { id: pokemonId } = useParams()

  fetch(`${process.env.API_URL}/id`)
    .then((res) => res.json())
    .then((data) => console.log(data.pokemonId))

  console.log('pokemonId', pokemonId)

  return (
    <>
      <div className="bg-hijau">
        <div className="mx-3 py-3">
          <div className="d-flex justify-content-between">
            <h4 className="text-white">
                <i className="uil-arrow-left"></i>
            </h4>
            <h4 className=" text-white"><i className="uil-heart-sign"></i></h4>
          </div>
        </div>
        <DetailsPokemon
          name="Bullbasaur"
          type={['Grass',' Poison']}
          image={bullbasaurMd}
          species="Seed"
          height="2`3.6” (0.70 cm)"
          weight="15.2 lbs (6.9 kg)"
          abilities={['Overgrow',',','Chlorophyl']}
          population1="87.5%"
          population2="12.5%"
          egggroups="Monster"
          eggcycle="Grass"
        />
      </div>
    </>
  )
}
