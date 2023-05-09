import { Form, FormContainer, H1, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  return (
    <FormContainer>
      <H1>Cadastro </H1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={props.register}>Cadastrar</SendButton>
        <BackToLoginButton onClick={props.changePage}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
