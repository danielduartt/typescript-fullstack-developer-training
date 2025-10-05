import { ChakraProvider, createSystem, defaultConfig, Box } from "@chakra-ui/react"
import { Header } from "../components/Header/Header";
import { Card } from "../components/Card";

const system = createSystem(defaultConfig)

function App() {
  return (
    <ChakraProvider value={system}>
      <Header /> 
      <Box minHeight='100vh' backgroundColor={'#9413DC'} padding={"25px"}>
        <Card titulo="Faça Login" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
