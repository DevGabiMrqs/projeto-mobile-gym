import { ScreenHeader } from '@components/ScreenHeader';
import {Center, Text, VStack} from 'native-base'
import { UserPhoto } from '@components/UserPhoto';

export function Profile(){

    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil'/>
            <Center>
            <UserPhoto 
            size={150}
            borderWidth={0}
            mt={8}
            source={{ uri: 'https://github.com/devgabimrqs.png'}}
            alt="foto de perfil"
            />
            </Center>
        </VStack>
    );
}