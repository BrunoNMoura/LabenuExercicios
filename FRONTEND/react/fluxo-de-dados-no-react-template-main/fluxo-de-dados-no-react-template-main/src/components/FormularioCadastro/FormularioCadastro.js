
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">Título:
        <Input id="titulo" value={props.inputTitulo} onChange={(e)=> props.setInputTitulo (e.target.value)}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.inputImage} onChange={(e) =>props.setInputImage(e.target.value)} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.inputDescription} onChange={(e)=>props.setInputDescription(e.target.value)}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro