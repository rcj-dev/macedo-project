import React from 'react'
import ItensQualidade from '../components/ItensQualidade'
import ChatIcon from '../assets/icons/chat.svg'


const Qualidade = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 md:gap-10 place-items-center">
      <ItensQualidade icon={ChatIcon} text="Pós consulta de qualidade" paragrafo="Estamos ao seu lado também após a consulta, com orientações claras e acompanhamento para o sucesso do tratamento."/>
      <ItensQualidade icon={ChatIcon} text="Ambiente aconchegante" paragrafo="Sabemos que consultas médicas podem gerar desconforto, por isso criamos um ambiente sereno e acolhedor para sua tranquilidade."/>
      <ItensQualidade icon={ChatIcon} text="Equipe especializada" paragrafo="Contamos com profissionais de diversas especialidades, garantindo que todas as suas necessidades de saúde sejam atendidas aqui!"/>
      <ItensQualidade icon={ChatIcon} text="Compromisso duradouro" paragrafo="Nosso objetivo é proporcionar não apenas um tratamento eficaz, mas também um plano de cuidado contínuo para a sua saúde e bem-estar."/>
    </div>
  )
}

export default Qualidade