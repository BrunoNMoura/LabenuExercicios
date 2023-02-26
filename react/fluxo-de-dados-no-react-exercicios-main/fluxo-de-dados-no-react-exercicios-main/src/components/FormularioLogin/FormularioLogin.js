import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input value={props.inputName} onChange={(e)=>props.setInputName(e.target.value)} type={"text"} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input value={props.inputProfilePicture} onChange={(e=>props.setInputProfilePicture(e.target.value))} type={"text"} />
        </StyledLabel>
        <SendButton onClick={props.login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
