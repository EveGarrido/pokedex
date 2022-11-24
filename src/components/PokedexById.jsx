import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Pokemon-Logo.png';


const PokedexById = () => {

  const [ pokemon, setPokemon ] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setPokemon(res.data));
  }, [id]);

  // console.log(pokemon);

  const colorBox = 
  (pokemon.types?.[0].type.name === 'normal') ? 
    {boxShadow: '0px 0px 7px 3px #d9ccae', background: 'linear-gradient(0deg, #d9ccae 0%, rgba(255,255,255,1) 100%)'}: 
  (pokemon.types?.[0].type.name === 'fighting') ? 
    {boxShadow: '0px 0px 7px 3px #507c95', background: 'linear-gradient(0deg, #507c95 0%, rgba(255,255,255,1) 100%)'}: 
  (pokemon.types?.[0].type.name === 'flying') ? 
    {boxShadow: '0px 0px 7px 3px #00cbf9', background: 'linear-gradient(0deg, #00cbf9 0%, rgba(255,255,255,1) 100%)'}:
  (pokemon.types?.[0].type.name === 'poison')? 
    {boxShadow: '0px 0px 7px 3px #ec29ff', background: 'linear-gradient(0deg, #ec29ff 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'ground') ?
   {boxShadow: '0px 0px 7px 3px #ae693a', background: 'linear-gradient(0deg, #ae693a 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'rock') ? 
   {boxShadow: '0px 0px 7px 3px #897270', background: 'linear-gradient(0deg, #897270 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'bug') ? 
   {boxShadow: '0px 0px 7px 3px #6ee65e', background: 'linear-gradient(0deg, #6ee65e 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'ghost') ? 
   {boxShadow: '0px 0px 7px 3px #ac75b1', background: 'linear-gradient(0deg, #ac75b1 0%, rgba(255,255,255,1) 100%)'} :
  (pokemon.types?.[0].type.name === 'steel') ? 
   {boxShadow: '0px 0px 7px 3px #6f9198', background: 'linear-gradient(0deg, #6f9198 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'fire') ? 
   {boxShadow: '0px 0px 7px 3px #ff4d32', background: 'linear-gradient(0deg, #ff4d32 0%, #ffe480 100%)'} : 
  (pokemon.types?.[0].type.name === 'water') ? 
   {boxShadow: '0px 0px 7px 3px #004dff', background: 'linear-gradient(0deg, #004dff 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'grass') ? 
   {boxShadow: '0px 0px 7px 3px #00b34a', background: 'linear-gradient(0deg, #00b34a 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'electric') ? 
   {boxShadow: '0px 0px 7px 3px #e6ff00', background: 'linear-gradient(0deg, #e6ff00 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'psychic') ? 
   {boxShadow: '0px 0px 7px 3px #7a7ea9', background: 'linear-gradient(0deg, #7a7ea9 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'ice') ? 
   {boxShadow: '0px 0px 7px 3px #4cffe1', background: 'linear-gradient(0deg, #4cffe1 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'dragon') ? 
   {boxShadow: '0px 0px 7px 3px #ff8500', background: 'linear-gradient(0deg, #ff8500 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'dark') ? 
   {boxShadow: '0px 0px 7px 3px #170000', background: 'linear-gradient(0deg, #170000 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'fairy') ? 
   {boxShadow: '0px 0px 7px 3px #ff6f91', background: 'linear-gradient(0deg, #ff6f91 0%, rgba(255,255,255,1) 100%)'} : 
  (pokemon.types?.[0].type.name === 'shadow') ? 
   {boxShadow: '0px 0px 7px 3px #414656', background: 'linear-gradient(0deg, #414656 0%, rgba(255,255,255,1) 100%)'} : 
  {boxShadow: '0px 0px 7px 3px #b9d6c5'};

  return (
    <div className='container-pokemon-id'>
      <button className='back' onClick={()=> navigate(-1)}><i className="fa-solid fa-circle-arrow-left"></i></button>
      <img className='logo-id' src={logo} alt="photo" />
      <div >
        <div className='square-pokemon' style={colorBox}>
          <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="photo" />
          <div className='square-pokemon-detailes'>
            <div className='square-details-hw'>
              <p><b>Height: </b>{pokemon.height}</p>
              <p><b>Weight: </b>{pokemon.weight}</p>
            </div>
            <div className='square-details-name'>
              <h1>{pokemon.name}</h1>
              <p># {pokemon.id}</p>
            </div>
          </div>
        </div>
        <div className='type-and-abilities' style={colorBox}>
          <div className='type-and-abilities-details'>
            <h2>Types</h2>
            <div className='types'>
              <p>{pokemon.types?.[0]?.type.name}</p>
              <p>{pokemon.types?.[1]?.type.name}</p>
            </div>
          </div>
          <div className='type-and-abilities-details' style={colorBox}>
            <h2>Abilities</h2>
            <div className='types'>
              <p>{pokemon.abilities?.[0]?.ability.name}</p>
              <p>{pokemon.abilities?.[1]?.ability.name}</p>
            </div>
          </div>
        </div>
        <div className='base-stats' style={colorBox}>
          <h2>Base Stats</h2>
          <div className='base-stats-details'>
            <p><b>HP: </b>{pokemon?.stats?.[0].base_stat}</p>
            <p><b>Attack: </b>{pokemon.stats?.[1].base_stat}</p>
            <p><b>Defense: </b>{pokemon.stats?.[2].base_stat}</p>
            <p><b>Speed: </b>{pokemon.stats?.[5].base_stat}</p>
          </div>
        </div>
      </div>
      <div  className='movements' style={colorBox}>
        <h2>Movements</h2>
        <div style={{ '&::WebkitScrollbar': { width: 0, height: 0 } }} className='movements-list'>
          {
            pokemon.moves?.map((move)=>(
              <p key={move.move.name}>{move.move.name}</p>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PokedexById;