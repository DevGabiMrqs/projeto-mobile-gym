import { VStack, Image, Text, Center, Heading,} from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

export function SignIn(){


    return (
        <VStack flex={1} bg="gray.900">
            <Image 
            source={BackgroundImg}
            alt="Pessoas treinando"
            resizeMode="contain"
            position="absolute"
            />
            <Center my={24}>
            <LogoSvg/>
            <Text color="gray.100">
                Treine sua mente e o seu corpo
            </Text>
            </Center>
            <Center>
            <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
                Acesse sua Conta
            </Heading>
            </Center>
        </VStack>
    );
}