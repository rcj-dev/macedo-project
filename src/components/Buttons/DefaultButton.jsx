import React from 'react'
import Seta from '../../assets/icons/seta.svg'

const DefaultButton = () => {
  return (
    <button className="
    quicksand 
    font-button 
    md:w-65 
    w-[75%]
    h-9.5 
    rounded-[8px] 
    transition-all 
    duration-600 
    bg-[#1F3457] 
    text-white
    hover:cursor-pointer 
    hover:scale-105
        
    flex
    flex-row
    items-center
    justify-evenly
    ">

      <span>Agende uma Consulta</span>
      <img src={Seta} alt="Seta do botão" />    

    </button>
  )
}

export default DefaultButton
