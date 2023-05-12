import ComponentConfetti from "react-confetti";
import { functionCheckIsDOM } from "./../../../utils";
import { Wrapper } from './content.confetti.styles'
import { useEffect, useState } from "react";

export const Confetti = () => {
  const [size, setSize] = useState ( {height: 1000, width: 1000} )


  useEffect ( () => {
    functionCheckIsDOM ( () => {
      const height = window.innerHeight
      const width = window.innerWidth
      setSize ( {height, width} )
    } );
  }, [] );

  return (
    <Wrapper>
      <span>Właśnie dotarłeś do końca internetów, brawo 😎</span>
      <ComponentConfetti height={size.height} width={size.width}/>
    </Wrapper>
  )
}
