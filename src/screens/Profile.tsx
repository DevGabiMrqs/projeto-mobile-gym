import { ScreenHeader } from '@components/ScreenHeader';
import { Center, Text, VStack, Skeleton, ScrollView } from 'native-base'
import { UserPhoto } from '@components/UserPhoto';
import { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function Profile(){

    const PHOTO_SIZE = 33;

    const [photoIsLoading, setPhotoIsLoading] = useState(false);

    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil'/>

            <ScrollView>

            <Center mt={6} px={10}>
            {
            photoIsLoading //com o use state passo o loading da foto englobando o skeleton
            ?
            <Skeleton
            w={PHOTO_SIZE} 
            h={PHOTO_SIZE} 
            rounded="full"
            startColor="gray.400"
            endColor="gray.500"
            />
            :
            <UserPhoto 
            size={PHOTO_SIZE}
            source={{ uri: 'https://github.com/devgabimrqs.png'}}
            alt="foto de perfil"
            />}

            <TouchableOpacity>
                <Text color="green.500" fontFamily="body" fontWeight="bold" fontSize="md" mt={2} mb={7}>
                    Alterar foto
                </Text>
            </TouchableOpacity>

            <Input 
            placeholder='Nome'
            bg="gray.600"
            />
            <Input 
            placeholder='E-mail'
            bg="gray.700"
            isDisabled
            />

            </Center>

            <VStack px={10} mt={8} mb={9}>
                <Text color="white" mb={3}>
                    Alterar senha
                </Text>
                <Center>
                <Input
                placeholder='Senha Antiga' 
                bg="gray.600"
                secureTextEntry
                />
                <Input 
                placeholder='Nova Senha'
                bg="gray.600"
                secureTextEntry
                />
                <Input 
                placeholder='Confirmar Senha'
                bg="gray.600"
                secureTextEntry
                />

                <Button
                mt={6}
                title="Atualizar"
                />
                </Center>
            </VStack>
            </ScrollView>
        </VStack>
    );
}