import type { Metadata } from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'
import Navbar from './Components/navbar/Navbar'
import ClientOnly from './Components/ClientOnly'
import RegisterModal from '@/app/Components/modals/RegisterModal';
import ToasterProvider from '@/app/providers/ToasterProvider'
import LoginModal from './Components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './Components/modals/RentModal'
import SearchModal from './Components/modals/SearchModal'


export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}
const font=Nunito({
  subsets:["latin"],
})
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal/>
          <LoginModal/>
          <SearchModal/>
          <RegisterModal/>
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
  
        <div className="pb-20 pt-28">
          {children}
        </div>
    
        </body>
    </html>
  )
}
