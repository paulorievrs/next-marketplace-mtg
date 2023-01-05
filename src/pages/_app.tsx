import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Menu from '../components/Menu/Menu'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CartContextProvider from '../contexts/CartContext'

import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-sans layout h-full`}>
      <ToastContainer />
      <CartContextProvider>
        <Menu />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </CartContextProvider>
    </main>
  )
}
