import { Button } from './Button/Button'

export const ButtonExamples = () => {
  const handleClick = () => {
    alert('Botão clicado!')
  }

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>Exemplos do Componente Button</h2>
      
      {/* Variantes */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={handleClick}>
          Primary
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          Secondary
        </Button>
        <Button variant="outline" onClick={handleClick}>
          Outline
        </Button>
      </div>

      {/* Tamanhos */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="small" onClick={handleClick}>
          Small
        </Button>
        <Button size="medium" onClick={handleClick}>
          Medium
        </Button>
        <Button size="large" onClick={handleClick}>
          Large
        </Button>
      </div>

      {/* Estados */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <Button onClick={handleClick}>
          Normal
        </Button>
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      </div>

      {/* Full Width */}
      <Button fullWidth onClick={handleClick}>
        Full Width Button
      </Button>

      {/* Botão de Submit */}
      <Button type="submit" variant="primary">
        Submit Form
      </Button>
    </div>
  )
}