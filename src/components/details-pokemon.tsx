import classNames from 'classnames'
import React  from 'react'
import { Card } from 'react-bootstrap'

import { pokemon } from '../assets/images'

type DetailsProps= {
  name?: string
  type?: string[]
  image?: string
  color?: string
  species?: string
  height? :string
  weight? :string
  abilities? :string[]
  population1?: string
  population2?: string
  egggroups?: string
  eggcycle?: string
}

export const DetailsPokemon = (props:DetailsProps) => {
  const {
    name,
    type,
    image,
    color,
    species,
    height,
    weight,
    abilities,
    population1,
    population2,
    egggroups,
    eggcycle
  } = props

  return(
    <>
      <div className='bg-hijau'>
        <div className='ms-3'>
          <h1 className='text-white fw-bold'>{name}</h1>
          <h4 className='text-white text-badge'>{type}</h4>
        </div>
        <div className='mt-5 pb-5 text-center'>
          <img src={pokemon} alt="" className='img-background'/>
          <img src={image} className='items-center'/>
        </div>
      </div>
      <div className='bg-white rounded-top'>
        <div className='ms-4'>
          <h4 className='fw-semibold pt-4'>
            <span>Stocks </span>
            <span className='ms-3 text-secondary'>Base Stats</span>
          </h4>
        </div>
          <hr className='line-details mt-1 mb-3'/>
          <div className='ms-4 mt-1'>
            <div>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Species</span>
                <span className='ms-4'>{species}</span>
              </h5>
            </div>
            <div className='mt-3'>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Height</span>
                <span className='ms-4'>{height}</span>
              </h5>
            </div>
            <div className='mt-3'>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Weight</span>
                <span className='ms-4'>{weight}</span>
              </h5>
            </div>
            <div className='mt-3'>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Abilities</span>
                <span className='ms-4'>{abilities}</span>
              </h5>
            </div>
            <div className='mt-4 mb-4'>
              <h5 className='fw-semibold'>
                Breeding
              </h5>
            </div>
            <div className='mt-3'>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Species</span>
                <span className='ms-4'>{population1}</span>
                <span className='ms-2'>{population2}</span>
              </h5>
            </div>
            <div className='mt-3'>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Egg Group</span>
                <span className='ms-4'>{egggroups}</span>
              </h5>
            </div>
            <div className='mt-3'>
              <h5 className='fw-semibold'>
                <span className='text-secondary'>Egg Cycle </span>
                <span className='ms-4'>{eggcycle}</span>
              </h5>
            </div>
          </div>
      </div>
    </>
  )
}
