import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { SignUp } from './SignUp';



export function SignIn(){


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="gray.900" paddingBottom={16}>
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
                <Input 
                placeholder="E-mail" 
                keyboardType="email-address"
                autoCapitalize="none"
                />
                <Input 
                placeholder="Senha"  
                secureTextEntry
                />
                <Button  
                title="Acessar"
                variant="solid"
                />
                </Center>
                <Center>
                <Text 
                color="gray.100" 
                mb={4}
                fontFamily="body"
                >
                Ainda não tem acesso?
                </Text>
                    <Button  
                    title="Criar Conta"
                    variant="outline"
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}