import React from 'react'

const ItensQualidade = (props) => {
  return (
    <div className="hover:scale-105 hover:bg-[#1F3457] hover:text-white hover:cursor-default transition-all duration-600 quicksand w-60 flex flex-col justify-center h-105 gap-5 bg-white p-6 mb-50 rounded-2xl shadow-lg shadow-gray-300">
      <img src={props.icon} alt="" className="w-25"/>
      <h3 className="font-quality-itens">{props.text}</h3>
      <p className="font-quality-p">{props.paragrafo}</p>
    </div>
  )
}


export default ItensQualidade