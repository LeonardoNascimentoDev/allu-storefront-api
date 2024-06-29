import { FooterBar } from '../../styles/components/Footer'

function Footer(): JSX.Element {
  return (
    <FooterBar>
      Allugator <span className="brand">Store</span> {new Date().getFullYear()}
    </FooterBar>
  )
}

export default Footer
