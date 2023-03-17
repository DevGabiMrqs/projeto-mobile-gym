import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Image, VStack, Text, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({...rest}: Props){


    return(
        <>
        <TouchableOpacity >
            <HStack bg="gray.500"  alignItems="center" p={3/2} rounded="md" mb={4} pr={4}>
                <Image 
                source={{ uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
                alt="imagem do exercício"
                w={16}
                h={16}
                rounded="md"
            />
            <VStack mr={20} pl={4} justifyContent="center">
                <Heading color="gray.200" fontSize="md">
                    Levantamento terra
                </Heading>
                <Text color="gray.300" fontSize="sm" numberOfLines={2}>
                    3 séries x 12 repetições
                </Text>
            </VStack>
            <Icon as={Entypo} name="chevron-thin-right"/>
            </HStack>
        </TouchableOpacity>
    </>
    );
}