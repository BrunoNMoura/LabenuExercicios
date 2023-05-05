import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react'

export const ImageInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <FormLabel>Imagem</FormLabel>
            <Input
                name="imageUrl"
                value={value}
                onChange={onChange}
                placeholder="link para a imagem"
            />
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Esse Link não é valido.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}

/* "title": "Bolo de Chocolate",
"description": "Ingredientes (12 porções) Massa ovo 3 ovos açúcar 1 e 1/2  ícara (chá) de açúcar farinha de trigo 2 xícaras (chá) de farinha de trigo chocolate em pó 1 xícara (chá) de chocolate em pó ou achocolatado óleo 1/2 xícara (chá) de óleo fermento em pó 1 colher (sopa) de fermento em pó sal 1 pitada de sal água 1 xícara (chá) de água quente Cobertura leite 4 colheres sopa) de leite chocolate em pó 1/2 xícara (chá) de chocolate em pó manteiga 1 colher (sopa) de manteiga açúcar 1 xícara (chá) de açúcar.Modo de preparo Modo de preparo : 40min 1 Massa Em um liquidificador, bata os ovos, o Açúcar, o óleo, o achocolatado e a farinha de trigo. 2 Despeje a massa em uma tigela e adicione a água quente e o fermento, misturando bem. 3 Despeje a massa em uma forma untada e asse em forno médio-alto (200° C), preaquecido, por 40 minutos. 4 Desenforme ainda quente. 5 Cobertura Em uma panela, leve todos os ingredientes ao fogo até levantar fervura. 6 Despeje ainda quente em cima do bolo.",
"imageUrl": "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg" */