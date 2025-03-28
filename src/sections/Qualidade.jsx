import React from 'react'
import ItensQualidade from '../components/ItensQualidade'
import ChatIcon from '../assets/icons/chat.svg'
import Folha from '../assets/icons/folha.svg'
import Chapeu from '../assets/icons/chapeu.svg'
import Coracao from '../assets/icons/coracao.svg'

const Qualidade = () => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center mb-50">
      <ItensQualidade icon={ChatIcon} text="Pós consulta de qualidade" paragrafo="Estamos ao seu lado também após a consulta, com orientações claras e acompanhamento para o sucesso do tratamento."/>
      <ItensQualidade icon={Folha} text="Ambiente aconchegante" paragrafo="Sabemos que consultas médicas podem gerar desconforto, por isso criamos um ambiente sereno e acolhedor para sua tranquilidade."/>
      <ItensQualidade icon={Chapeu} text="Equipe especializada" paragrafo="Contamos com profissionais de diversas especialidades, garantindo que todas as suas necessidades de saúde sejam atendidas aqui!"/>
      <ItensQualidade icon={Coracao} text="Compromisso duradouro" paragrafo="Nosso objetivo é proporcionar não apenas um tratamento eficaz, mas também um plano de cuidado contínuo para a sua saúde e bem-estar."/>
    </div>
  )
}

export default Qualidade