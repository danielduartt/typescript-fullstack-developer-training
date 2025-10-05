import { Input, Box, Center } from "@chakra-ui/react"
import { Button } from "../src/components/Button/Button"
import { mostrarBoasVindas } from "../src/services/boasVindas"
import './Card.css'

interface ICard {
  titulo?: string;
}

export const Card = ({ titulo = "Faça Login" }: ICard) => {
  const handleLogin = () => {
    mostrarBoasVindas()
  }

  return (
    <Box className="login-card" backgroundColor={'gray.100'} borderRadius='25px' padding={"15px"}> 
      <Center><h1>{titulo}</h1></Center>
      <div className="form-field">
        <Input placeholder="Email" type="email" /> 
      </div>
      <div className="form-field">
        <Input placeholder="Senha" type="password" />
      </div>
      <Center>
        <div style={{ marginTop: "15px", width: "100%" }}>
          <Button
            onClick={handleLogin}
            variant="primary" 
            size="medium" 
            fullWidth>
            Entrar
          </Button>
        </div>
      </Center>
    </Box>
  )
}
