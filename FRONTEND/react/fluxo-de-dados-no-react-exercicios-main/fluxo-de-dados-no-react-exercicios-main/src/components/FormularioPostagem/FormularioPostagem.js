
import { FormContainer, Form, Input, StyledLabel, SendButton, H2 } from "./styled";

const FormularioCadastro = (props) => {
  return (
    <FormContainer>
      <H2>Insira sua postagem abaixo: </H2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input value={props.inputTitle} onChange={(e)=>props.setInputTitle(e.target.value)} id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input value={props.inputImage} onChange={(e)=>props.setInputImage(e. target.value)} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input value={props.inputDescription} onChange={(e)=>props.setInputDescription(e.target.value)} id="descricao" />
        </StyledLabel>
        <SendButton onClick={props.insertPost}>Post</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
