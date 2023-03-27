import { VStack, Icon, Heading, HStack, Text } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
 
export function Exercise() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack()
    } //navigation(a const que informa a rota que está sendo buscada)


    return(
        <VStack flex={1}>
            <VStack pt={12} px={8} bg="gray.600">
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="green.500" size={6}/>
                </TouchableOpacity>
                <HStack justifyContent="space-between" mt={4}>
                    <Heading color="gray.100" fontSize="lg">
                        Puxada frontal
                    </Heading>
                    <HStack>
                        <Text ml={1} textTransform="capitalize" color="gray.200">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>

    );
}