import { ReactNode } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
