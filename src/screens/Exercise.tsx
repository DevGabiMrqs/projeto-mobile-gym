import { VStack, Icon, Heading, HStack, Text, Image, Box, ScrollView} from 'native-base'
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import { Button } from '@components/Button';
 
export function Exercise() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack()
    } //navigation(a const que informa a rota que está sendo buscada) e goBack(é o que está sendo )

    return(
        <VStack flex={1}>
            <VStack pt={12} px={8} bg="gray.600" pb={8}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="green.500" size={6}/>
                </TouchableOpacity>
                <HStack justifyContent="space-between" mt={4}>
                    <Heading color="gray.100" fontSize="lg">
                        Puxada frontal
                    </Heading>
                    <HStack alignItems="center">
                        <BodySvg />
                        <Text ml={1} textTransform="capitalize" color="gray.200">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <VStack py={8} px={8}>
            <Image 
            w="full"
            h={80}
            alt="nome do exercício"
            source={{ uri: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
            resizeMode="cover"
            mb={3}
            rounded="lg"
            overflow="hidden"
            />
            <Box bg="gray.600" rounded="md" mb={5} px={4}>
            <HStack  alignItems="center" justifyContent="space-around" mx={3} mb={8} mt={5}>
                <HStack>
                    <SeriesSvg />
                    <Text color="gray.100" ml={2}>
                        3 séries
                    </Text>
                </HStack>
                <HStack>
                    <RepetitionsSvg />
                    <Text color="gray.100" ml={2}>
                        12 repetições
                    </Text>
                </HStack>
            </HStack>

            <Button title='Marcar como realizado'/>

            </Box>
            </VStack>
        </VStack>

    );
}