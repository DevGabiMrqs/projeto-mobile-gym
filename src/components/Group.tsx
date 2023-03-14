import { IPressableProps, Text, Pressable } from 'native-base';


type Props = IPressableProps & {
    name: string
    isActive: boolean;
}

export function Group({name, isActive, ...rest} : Props){

    return(
        <Pressable
            bg="gray.600"
            mr={3}
            w={24}
            h={10}
            rounded={8}
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            {...rest}
            isPressed={isActive} //porém para não ficarmos alterando na mão o active passamos o estado para renderizar a aplicação.
            _pressed={{
                borderWidth:1,
                borderColor:"green.500",
                tintColor:"green.500",
            }}
        >
            <Text
                color={isActive ?"green.500"  :"gray.100" }
                textTransform="uppercase"
                fontWeight="bold"
            >
                {name}
            </Text>
        </Pressable>
    );
}