import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    InputRightElement,
    InputGroup,   
    Button
} from '@chakra-ui/react'
import { FaEyeSlash, FaEye } from "react-icons/fa";

export const PassworInput = ({ isValid, value, onChange }) => {

  const [showPassword, setShowPassword] = useState(false)

  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
}
    return (
        <FormControl isInvalid={!isValid}>
            <FormLabel>Senha</FormLabel>
            <InputGroup size='md'>
                <Input
                    name="password"
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha com no mínimo 6 caracteres'
                />
                <InputRightElement width='4.5rem'>
                    <Button 
                    h='1.75rem' 
                    size='sm' 
                    onClick={onClickShowPassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as='p'>
                    Deve conter no mínimo 6 caracteres.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}