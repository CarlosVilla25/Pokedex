import React from 'react'
import './PokeCard.css'

const PokeCard = ({ data }) => {

  console.log('data :>> ', data);

  const typeColor = (type) => {
    return `type-${type}`;
  }

  return (
    <div className='pokecard-container'>
      {data && data.map((pokemon) => (
        <div className='card-container'>
          <div className="card-name">
            <div className='card-id-circle'>
              <span>{pokemon.id}</span>
            </div>
            <strong>{pokemon.name}</strong>
          </div>
          <hr />
          <div className="card-img">
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <hr />
          <div className="card-stats">
            <div>
              <span>Type - </span>
              <strong className={typeColor(pokemon.types[0].type.name)}>{pokemon.types[0].type.name}</strong>
              <br />
              <span>Move - </span>
              <strong>{pokemon.moves[0].move.name}</strong>
              <br />
              <span>Ability - </span>
              <strong>{pokemon.abilities[0].ability.name}</strong>
            </div>
          </div>
        </div>
      )).sort()}
    </div>
  )
}

export default PokeCard
