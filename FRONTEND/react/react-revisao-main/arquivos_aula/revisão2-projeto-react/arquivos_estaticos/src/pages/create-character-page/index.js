import * as LS from './styled'
import * as GS from '../../styles/index'

export default function CreateCharacterPage() {

  return (
    <LS.StyledContainer>
      <GS.StyledForm onSubmit={()=>{}}>
        <GS.StyledTitle>Indentifique-se para entrar no planeta Rick!</GS.StyledTitle>
        <GS.StyledLabel htmlFor='name'>Nome do Personagem</GS.StyledLabel>
        <GS.StyledInput required id='name' name='name' value={''} onChange={()=>{}} />
        <GS.StyledLabel htmlFor='species'>Espécie do Personagem</GS.StyledLabel>
        <GS.StyledInputSelectStyle name='species' value={''} onChange={()=>{}} >
          <option value="">Selecione a espécie</option>
          <option value="Human">HUMAN</option>
          <option value="Alien">ALIEN</option>
          <option value="Diseas">DISEAS</option>
        </GS.StyledInputSelectStyle>
        <GS.StyledLabel htmlFor='image'>Image</GS.StyledLabel>
        <GS.StyledInput required id='image' name='image' value={''} onChange={()=>{}} />
        <GS.StyledButton>Criar Personagem</GS.StyledButton>
      </GS.StyledForm>
    </LS.StyledContainer>
  );
}