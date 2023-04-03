import { Stack, IInputProps, FormControl} from 'native-base'
import { Input as NativeBaseInput} from 'native-base'


type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest} : Props) {

    const invalid = !!errorMessage || isInvalid; //!!istruthy  ouInválido


    return (
        <FormControl isInvalid={invalid}>
            <NativeBaseInput 
            maxW={300} 
            mx="auto" 
            bg="gray.900"
            borderWidth={0}
            fontSize="md"
            color="gray.100"
            fontFamily="body"
            mb={17}
            h={55}
            isInvalid={invalid}
            _invalid={{
                borderWidth: 1,
                borderColor: "red.500"
            }}
            {...rest}
            _focus={{
                bg:"gray.800",
                borderWidth: 1,
                borderColor:"#00875F"
            }}
        />
        <FormControl.ErrorMessage>
            {errorMessage}
        </FormControl.ErrorMessage>

        </FormControl> //através do formControl conseguimos falar se o input é válido ou não
    );
}
