
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../Snacks"

import { useSnack } from '../../../hooks/useSnack';

export function Pizzas() {
  const {pizzas} = useSnack()

  return (
    <>
      <Head title="Pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}