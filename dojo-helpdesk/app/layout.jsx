// This layout component in the root of tha app folder... Wraps any page component in the application. It wraps the home page, the page inside of the tickets folder.
// If you have sections on your site that are on every page, you can put those sections in this file instead of manually putting them in every other fil.

import './globals.css'
// importing font
import { Rubik } from 'next/font/google'

// components
import Navbar from './components/Navbar'

// choosing subsets or cool properties for fonts
const rubik = Rubik({ subsets: ['latin'] })

// this is how you make meta data in NextJS apps. Because it's in this file, it'll be on every page.
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// remember that layout components wrap page components.
export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/*Apply custom font*/}
      <body className={rubik.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
