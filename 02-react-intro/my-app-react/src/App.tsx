import { Layout } from "./components/Layout"
import { ChakraProvider, createSystem, defaultConfig} from "@chakra-ui/react"
import styled from "styled-components"

const system = createSystem(defaultConfig)
const Box = styled.div`
  background-color: orange;
  padding: 20px;
  border-radius: 25px;
  max-width: 400px;
  margin: 0 auto;
`

function App() {
  return (
    <ChakraProvider value={system}>
      <Layout>
    
        <Box>
          <h1>Faça Login</h1>
        </Box>

        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" type="email" />

        <label htmlFor="passwordInput">Senha</label>
        <input id="passwordInput" type="password" />

        <button type="submit">
          Entrar
        </button>

      </Layout>
    </ChakraProvider>
  );
}

export default App;
