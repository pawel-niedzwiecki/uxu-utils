import { useEffect, useState } from "react";
import ComponentConfetti from "react-confetti";
import { functionCheckIsDOM } from "./../../../utils";
import { Wrapper } from './content.confetti.styles';
import { ComponentConfettiProps } from './content.confetti.types'

export const Confetti: ComponentConfettiProps = ( {title, ...porps} ) => {
  const [size, setSize] = useState ( {height: 1000, width: 1000} )

  useEffect ( () => {
    functionCheckIsDOM ( () => {
      const height = window.innerHeight
      const width = window.innerWidth
      setSize ( {height, width} )
    } );
  }, [] );

  return (
    <Wrapper {...porps}>
      {title && <span>{title}</span>}
      <ComponentConfetti height={size.height} width={size.width} style={{top: "-3rem"}}/>
    </Wrapper>
  )
}
