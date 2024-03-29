import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import { useState, useRef } from 'react';
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import {AuthNavigatorRoutesProps} from '@routes/auth.routes'
import { useNavigation} from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'; //lib para pegar o valor dos inputs, e o Controller vai controlar nosso inputs
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormDataProps =  {
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
} //passei a tipagem dos dados que estou enviando do formulário.

const signUpSchema = yup.object({
    name: yup.string().required("Informe o nome."),
    email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
    password: yup.string().required("Informe a senha.").min(6, "A senha deve ter pelo menos 6 dígitos."),
    passwordConfirm: yup.string().required("Confirme a senha.").oneOf([yup.ref('password')], 'A confirmação da senha não confere.') //o valor do campo deve ser igual ao valor do campo "password".
});

export function SignUp(){


    const {control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    }); 
    //passamos a props dos dados, aqui onde são enviados pro form.
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
                // rules={{
                //     required: "Informe o nome."
                // }} POIS JÁ ADICIONAMOS O SCHEMA
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
                    errorMessage={errors.password?.message}
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
                    errorMessage={errors.passwordConfirm?.message}
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