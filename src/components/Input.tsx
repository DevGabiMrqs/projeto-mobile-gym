import { Stack, IInputProps} from 'native-base'
import { Input as NativeBaseInput} from 'native-base'


export function Input({...rest} : IInputProps) {


    return (
        <Stack >
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
            {...rest}
            _focus={{
                bg:"gray.800",
                borderWidth: 1,
                borderColor:"#00875F"
            }}
        />
        </Stack>
    );
}
