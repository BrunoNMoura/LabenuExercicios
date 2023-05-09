import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro de Endereço</h1>
      <Form>
        <StyledLabel htmlFor="endereco">
          Endereço:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="numero">
          Número:
          <Input type="Number" id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input type="Number" id="telefone" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(3)}
        >Enviar Cadastro</SendButton>        
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;