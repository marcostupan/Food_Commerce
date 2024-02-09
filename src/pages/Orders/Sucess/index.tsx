import { Head } from "../../../components/Head";
import { Container, Inner, SubTitle, Title } from "./styles";
import { useParams } from "react-router-dom";


export default function OrderSucessPage() {
  const {orderId} = useParams()

  return <Container>
    <Head title="Compra Realizada com sucesso!"/>

    <Inner>
      <Title>Compra Realizada com Sucesso</Title>

      <p>Número de Pedido <code>#{orderId}</code></p>

      <SubTitle>Dados de Contato da Loja</SubTitle>

      <ul>
        <li>Endereço: Avenida Central, 123</li>
        <li>Tel: 11 99999-8999</li>
      </ul>

      <br />
      <a href="/">Voltar para Página Inicial</a>
    </Inner>
  </Container>
}

