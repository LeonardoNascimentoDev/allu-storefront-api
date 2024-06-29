import { FooterBar } from '../../styles/components/Footer'

function Footer(): JSX.Element {
  return (
    <FooterBar>
     <span className="brand">©Allugator</span> Assinatura de Eletrônicos {new Date().getFullYear()}
    </FooterBar>
  )
}

export default Footer
