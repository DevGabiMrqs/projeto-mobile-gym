import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import { useState } from 'react';
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import {AuthNavigatorRoutesProps} from '@routes/auth.routes'
import { useNavigation} from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'; //lib para pegar o valor dos inputs, e o Controller vai controlar nosso inputs
import * as yup from 'yup';

type FormDataProps =  {
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
} //passei a tipagem dos dados que estou enviando do formulário.

const signUpSchema = yup.object({
    name: yup.string().required("Informe o nome"),
    email: yup.string().required("").email("E-mail inválido"),
}).required

export function SignUp(){


    const {control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        defaultValues:{} //
    }); //passamos a props dos dados, aqui onde são enviados pro form.
    //vamos usar o useForm para acessar o control, passamos o mesmo control para 
    //todos inputs pois vão ser controlados pelo mesmo formulário.
    //vamos usar o handleSubmit para ele enviar os datas da nossa aplicação.                                            .

    function handleSignUp( {name, email, password, passwordConfirm} : FormDataProps ){ //No lugar de any, eu passo o 
        console.log({name, email, password, passwordConfirm})
    }

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

                <Controller  //controla o input
                control={control}  //controla o valor de cada input
                name="name" // nome do input
                rules={{
                    required: "Informe o nome."
                }}
                render={({ field : { onChange, value } }) => ( // e para cada input controlado eu digo qual input quero renderizar
                    <Input 
                    placeholder="Nome" 
                    keyboardType="name-phone-pad"
                    onChangeText={onChange}
                    value={value} //valor atual do input
                    errorMessage={errors.name?.message}
                    //onChangeText={setName} porém agora não iremos utilizar estado, mas sim o {field : {e passar onChange aqui para renderizar}} 
                />   
                )}  
                />

                <Controller 
                control={control}
                name="email"
                rules={{
                    required: "Informe o email.",
                    pattern: {
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                }}
                render={({ field : {onChange, value} }) => (
                    <Input 
                    placeholder="E-mail" 
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.email?.message}
                    />  
                )}
                />
               

                <Controller 
                control={control}
                name="password"
                render={({ field : { onChange, value } }) => (
                    <Input 
                    placeholder="Senha"  
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    />
                )}
                />

                <Controller 
                control={control}
                name="passwordConfirm"
                render={({field : { onChange, value }}) => (
                    <Input 
                    placeholder="Confirme a senha"  
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    onSubmitEditing={handleSubmit(handleSignUp)} //para ahabilitar o botão de envio do formulário
                    returnKeyType="send"
                    />
                )}
                />

                <Button  
                title="Criar e acessar"
                variant="solid"
                onPress={handleSubmit(handleSignUp)} //o handle submit vai passar pro handleSignUp todo conteudo do nosso formulário. E tbm para que passe os valores do formulário p/ o handlesignup.
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