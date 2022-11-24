import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import logo from '../assets/Pokemon-Logo.png';
import pokebola from '../assets/pokebola.png';


const InputName = () => {
  
  const navigate = useNavigate();
  
  const [userName, setuserName] = useState('');
  const dispatch = useDispatch();
  
  const enterUserName = ()=>{
    navigate('/pokedex');
    dispatch(changeName(userName));
  }

  return (
    <div className='input-name-container'>
      <div className='input-name-welcome'>
        <img className='logo-input-name' src={logo} alt="Logo" />
        <p><b>Welcome, Trainer !</b></p>
        <input type='text' value={userName} onChange={(e)=> setuserName(e.target.value)} placeholder={'Give me your name to start'}></input>
        <i className="fa-solid fa-angles-down"></i>
        <img onClick={enterUserName} className='pokebola-input-name' src={pokebola} alt="pokebola" />             
      </div>
    </div>
  );
};

export default InputName;