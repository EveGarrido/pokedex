import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

  const userNameinPokedex = useSelector(state => state.name);
  const [ pokemons, setPokemons] = useState([]);
  const [ pokemonName, setpokemonName] = useState('');
  const [ pokemonTypes, setPokemonTypes ] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
      .then(res => setPokemons(res.data.results));

    axios.get('https://pokeapi.co/api/v2/type/')
      .then(res => setPokemonTypes(res.data.results));
  }, [])

  // console.log(pokemonTypes);

  const searchPokemon = () =>{
    navigate((`/pokedex/${pokemonName.toLowerCase()}`))
  }

  const filterTypePokemon =(e)=>{
    const url = e.target.value;
    axios.get(url)
      .then(res => setPokemons(res.data.pokemon))
  }

  const [ page, setPage ] = useState(1);
  const pokemonsPerPage = 16;
  const lastIndex = page * pokemonsPerPage;//16
  const firstIndex = lastIndex - pokemonsPerPage;//0
  const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const pagesNumbers = [];
  for ( let i=1; i<=totalPages; i++ ){
    pagesNumbers.push(i)
  }

  const scroolLeft = ()=>{
    var slider = document.getElementById('slider');
    slider.scrollLeft -= 150;
  };

  const scroolNext = ()=>{
    var slider = document.getElementById('slider');
    slider.scrollLeft += 150;
  };

  return (
    <div className='pokedex-container'>
      <button  className='exit' onClick={()=>navigate('/')}><i className="fa-solid fa-right-from-bracket"></i></button>
      <h1 className='name-pokedex'>Pokedex</h1>
      <p><b className='text-welcome'>Welcome <span className='name'>{userNameinPokedex}</span>, here can you find your favorite Pokemon</b></p>
      <div className='seekers'>
        <div className='searching-by-name'>
          <input 
            className='input-by-name'
            type="text" 
            placeholder="Search Pokemon by name"
            value={pokemonName}
            onChange={(e)=> setpokemonName(e.target.value)}
            />
          <button className='btn-by-name' onClick={searchPokemon}>
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>
        <div>
          <select className='select-by-type' onChange={filterTypePokemon} name="" id="">
            {
              pokemonTypes.map((pokemonType)=>(
                <option 
                  className='select-by-type-options'
                  key={pokemonType.name} 
                  value={pokemonType.url}>{pokemonType.name}
                </option>
              ))
            }
          </select>
        </div>
      </div>
      <div >
        <ul className='container-cards'>
          {
            pokemonPaginated.map((pokemon)=>(
            // pokemons.map((pokemon)=>(
              // <li key={pokemon.url}>{pokemon.url}</li>
              <PokemonCard 
                key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
            ))
          }
        </ul>
      </div>
      <div className='buttons'>
        <button className='btns-prev-next' onClick={() => setPage(page - 1)} disabled={page === 1}><i className="fa-solid fa-angle-left"></i></button>
        <div className='container-slider'>
          <button className='btn-number-prev' onClick={scroolLeft}><i className="fa-solid fa-angles-left "></i></button>
          <div className='scroll' id='slider'>
            {
              pagesNumbers.map((pages)=>(
                <button className='btn-pages' key={pages} onClick={()=>setPage(pages)}>{pages}</button>
              ))
            }
          </div>
          <button className='btn-number-next' onClick={scroolNext}><i class="fa-solid fa-angles-right"></i></button>

        </div>
        <button className='btns-prev-next' onClick={() => setPage(page + 1)} disabled={page === totalPages}><i className="fa-solid fa-angle-right"></i></button>
      </div>
      <p>Developed by Evelyn H. GL</p>
    </div>
  );
};

export default Pokedex;