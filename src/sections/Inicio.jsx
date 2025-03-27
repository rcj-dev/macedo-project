import React from 'react'
import DefaultButton from '../components/Buttons/DefaultButton'
import Doutora from '../assets/images/PerfilDra.png'

const Inicio = () => {
  return (
    <section className="w-[85%] sm:w-full h-auto quicksand flex flex-col-reverse sm:flex-row items-center justify-center gap-8 sm:gap-12 py-10 sm:px-8 sm:py-15 mt-10 md:mt-5">
      {/* Text and Button Container */}
      <div className="w-full sm:w-150 flex flex-col items-center sm:items-start gap-6 sm:gap-8">
        <h1 className="font-h1 text-[#1F3457] text-5xl sm:text-5xl md:text-6xl font-bold leading-tight text-center lg:w-120 sm:text-left w-[calc(100%+20px)] sm:w-auto">
          A arte de sorrir e se sentir bem comeca aqui!
        </h1>
        <DefaultButton />
      </div>

      {/* Image Container */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <img 
          src={Doutora} 
          alt="Foto de perfil Dra. Milena Macedo" 
          className="w-[250px] sm:w-[350px] md:w-[450px] hover:scale-102 transition-all duration-700"
        />
      </div>
    </section>
  )
}

export default Inicio
