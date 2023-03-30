import { ScreenHeader } from '@components/ScreenHeader';
import { Center, Text, VStack, Skeleton, ScrollView, useToast, Box } from 'native-base'
import { UserPhoto } from '@components/UserPhoto';
import { useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import * as ImagePicker from 'expo-image-picker'; //você consegue acessar o album de foto e selcionar.
import * as FileSystem from 'expo-file-system'; //você consegue acessar onde as imagens estão alocadas. 

export function Profile(){

    const PHOTO_SIZE = 33;

    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/devgabimrqs.png')

    const toast = useToast();
    
    async function handleUserPhotoSelect() {
        setPhotoIsLoading(true)
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
            });

            if(photoSelected.canceled){
                return;
            }    
            
            if(photoSelected.assets[0].uri){
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);
            
                
            if (photoInfo.exists && !photoInfo.isDirectory) {
                if(photoInfo.size && (photoInfo.size / 1024 / 1024) > 5){
                    return toast.show({
                        title: "Essa é imagem é muito grande, escolha uma imagem menor.",
                        placement: 'top',
                        bg: "red.500"
                    })
                }

                setUserPhoto(photoSelected.assets[0].uri)
            }}

        } // para evitar que a nossa aplicação quebre vamos envolver por um bloco try catch.
        
        catch(error) {
            console.log(error);
        } finally {
            setPhotoIsLoading(false)
        }

    }//acessando o albúm de fotos, selecionando a imagem e aplicando a função de editar.
    //depois seta a imagem da posição um.

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

            <TouchableOpacity onPress={handleUserPhotoSelect}>
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