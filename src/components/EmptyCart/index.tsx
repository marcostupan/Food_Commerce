import { Button, Container } from "./styles";

import mandAndBurgerImg from '../../assets/man-and-burger.svg'


interface EmptyCartProps {
  title: string;
}

export function EmptyCart({ title }: EmptyCartProps ) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o Cardápio</Button>
      <img src={mandAndBurgerImg} alt="Homem com Hamburger" />
    </Container>
  )
}
