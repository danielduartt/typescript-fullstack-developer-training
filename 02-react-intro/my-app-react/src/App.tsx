import { Layout } from "../components/Layout"
import styled from 'styled-components'
import { ChakraProvider } from "@chakra-ui/react"


const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
  `
function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box>
          <h1>Faça seu Login</h1>
        </Box>
        <label htmlFor="email_input">Email</label>
        <input id="email_input"  type="email"/>

        <label htmlFor="password_input">Senha</label>
        <input id="password_input" type="password" />

        <button>
          Entrar
        </button>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
