"use client"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Poke-dex',
//   description: 'Poke-dex is a informative site where you will find all info about all pokemons.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Header</header>
        {children}
      </body>
    </html>
  )
}
