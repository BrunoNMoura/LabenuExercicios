import Card from '../../components/Card';
import { ContainerSelect } from './styled'
import InputSelect from '../../components/InputSelect';
import { SButton, StyledContainerCard } from '../../styles/index'

export default function CharacterPage() {

    return (
        <>
            <ContainerSelect>
                <InputSelect selectedSpecies={''} setSelectedSpecies={''} />

                <SButton onClick={()=>{}} >Selecionar Personagem</SButton>
            </ContainerSelect>
            <StyledContainerCard>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </StyledContainerCard>
        </>
    );
}