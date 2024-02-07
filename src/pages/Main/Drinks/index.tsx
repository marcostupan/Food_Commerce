
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../Snacks"

import { useSnack } from '../../../hooks/useSnack';

export function Drinks() {
  const {drinks} = useSnack()

  return (
    <>
      <Head title="Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
