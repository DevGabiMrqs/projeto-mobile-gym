import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import {AuthNavigatorRoutesProps} from '@routes/auth.routes'
import { useNavigation} from '@react-navigation/native'

export function SignUp(){

    const backLogin = useNavigation<AuthNavigatorRoutesProps>() 

    function backToLogin() {
        backLogin.navigate("signIn")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <VStack flex={1} paddingBottom={16}>
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
                    Crie sua conta
                </Heading>
                <Input 
                placeholder="Nome" 
                keyboardType="name-phone-pad"
                />
                <Input 
                placeholder="E-mail" 
                keyboardType="email-address"
                autoCapitalize="none"
                />
                <Input 
                placeholder="Senha"  
                secureTextEntry
                />
                <Input 
                placeholder="Confirme a senha"  
                secureTextEntry
                />
                <Button  
                title="Criar e acessar"
                variant="solid"
                />
                </Center>
                <Center>
                    <Button  
                    title="Voltar para o login"
                    variant="outline"
                    onPress={backToLogin}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}