import { Link } from "react-router-dom"

export const CardPokemon = (props) => {
  const { pokemon } = props

  const API_URL = process.env.API_URL

  return (
    <Link to={`${pokemon.id}`}>
      <div className={`poke-card-wrapper d-flex flex-column mb-3 justify-between bg-${pokemon.type[0].toLowerCase()}`}>
        <div className="d-flex flex-column gap-2 justify-between">
          <h2 className="poke-card-name">{pokemon.name.english}</h2>
          <div className="poke-card-type-wrapper">
            {pokemon.type?.map((item, index) => (
              <span key={index} className={`poke-card-type bg-${pokemon.type[0].toLowerCase()}-type`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="poke-card-image">
          <img src={`${API_URL}${pokemon.image}`} alt={pokemon.name} />
        </div>
      </div>
    </Link>
  )
}
