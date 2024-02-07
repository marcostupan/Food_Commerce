
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { useSnack } from "../../../hooks/useSnack";
import { Snacks } from "../Snacks";



export function BurgersPage() {

  const {burgers} = useSnack()

  return (
    <>
      <Head title="Hambúrgueres" description="Nossos melhores burgueres"/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
