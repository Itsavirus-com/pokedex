import classNames from 'classnames'
import React  from 'react'
import { Card } from 'react-bootstrap'

import { pokemon } from '../assets/images'

type CardProps ={
  name?: string
  type?: string[]
  image?: string
  color?: string
}

export const ListPokemon = (props: CardProps) =>{
  const{name, type, image, color} = props
return(
    <>
      <Card className={classNames('rounded h-2 mb-1 mt-1',`bg-${color}`)}>
        <div className='m-4 mb-5'>
          <img src={pokemon} className='img-pokemon' />
          <h5 className='text-white fw-semibold'>{name}
          </h5>
          <p className='text-white text-badge rounded-pill bg-shadow'><small>{type}</small></p>
          <img src={image} alt="" className='img-size'/>
        </div>
      </Card>
    </>
)
}
