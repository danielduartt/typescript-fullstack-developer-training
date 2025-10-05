import { Box, Heading } from "@chakra-ui/react"
import './Header.css'

export const Header = () => {
  return (
    <Box as="header" className="app-header">
      <div className="header-content">
        <Heading as="h1" size="md" className="header-title">Dio Bank</Heading>

        <nav className="header-nav">
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </Box>
  )
}
