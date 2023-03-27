import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'; //Essa é a propriedade que exportamos no auth e importamos aqui para acesssar as rotas.
import { useNavigation } from '@react-navigation/native';


export function SignIn(){

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount(){
    navigation.navigate("signUp")
}
//navigation(a const que informa a rota que está sendo buscada)
//navigate(e aqui leva a const e executa a função em si do navigate, passa a tela que quer navegar)

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false} >
            <VStack flex={1} px={10} pb={16}>
                <Image 
                source={BackgroundImg}
                defaultSource={BackgroundImg}
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
                mt={10}
                fontFamily="body"
                >
                Ainda não tem acesso?
                </Text>
                    <Button  
                    title="Criar Conta"
                    variant="outline"
                    onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}