interface ICard{
    id ?: number; 
    paragrafo ?: string;
}

export const Card = ({id, paragrafo} : ICard) => {
    console.log(id);
    return (
    <div>
      <h1>Card {id}</h1>
      <p>{paragrafo}</p>
    </div>
  )
}
