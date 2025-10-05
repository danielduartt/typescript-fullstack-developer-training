import { boasVindas } from "./boasVindas";

describe('boasVindas', () => {
    it('should return welcome message with name when name is provided', () => {
        const nome = 'João'
        const resultado = boasVindas(nome)
        expect(resultado).toBe('Seja bem-vindo(a), João!')
    })

    it('should return generic welcome message when no name is provided', () => {
        const resultado = boasVindas()
        expect(resultado).toBe('Seja bem-vindo(a) ao Dio Bank!')
    })

    it('should return generic welcome message when empty string is provided', () => {
        const resultado = boasVindas('')
        expect(resultado).toBe('Seja bem-vindo(a) ao Dio Bank!')
    })

    it('should handle special characters in name', () => {
        const nome = 'José da Silva'
        const resultado = boasVindas(nome)
        expect(resultado).toBe('Seja bem-vindo(a), José da Silva!')
    })
})