
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../Snacks"

import { useSnack } from "../../../hooks/useSnack";

export function IceCreams() {
  const {iceCreams} = useSnack()

  return (
    <>
      <Head title="Sobremesas" />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
