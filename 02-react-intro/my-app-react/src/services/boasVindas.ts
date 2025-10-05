export function boasVindas(nome?: string): string {
  if (nome) {
    return `Seja bem-vindo(a), ${nome}!`
  }
  return 'Seja bem-vindo(a) ao Dio Bank!'
}

export function mostrarBoasVindas(nome?: string): void {
  const mensagem = boasVindas(nome)
  alert(mensagem)
}