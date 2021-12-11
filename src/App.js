import React, { useEffect, useState } from 'react'
import PokeCard from './components/PokeCard'
import './App.css'

const App = () => {

  const [pokemon, setPokemon] = useState([])

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then(res => res.json())
      .then(({ results }) => {
        results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(data => {
              setPokemon(prev => [...prev, data])
            })
        })
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='app-container'>
      <div className="container-title">
        <h1><a href="https://pokeapi.co/">POKE <br /> API</a></h1>
      </div>
      <PokeCard data={pokemon} />
      <div className='app-footer'>Made with ❤ by <a href="https://github.com/CarlosVilla25">Charlie Villa</a></div>
    </div>
  )
}

export default App

