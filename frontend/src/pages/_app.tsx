import type { AppProps } from 'next/app'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GlobalStyle from '../styles/GlobalStyle'
import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <div className="wrapper">
          <Navbar />
          <Component {...pageProps} router={router} />
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default MyApp
