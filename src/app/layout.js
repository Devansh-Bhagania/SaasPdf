import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './components/Provider'
import Navbar from './components/Navbar'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Provider>
        {children}
        </Provider>
        </body>
        {/* <Script src="https://checkout.razorpay.com/v1/checkout.js" /> */}
    </html>
  )
}
