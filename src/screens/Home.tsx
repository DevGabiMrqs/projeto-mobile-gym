import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base'

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader'; 
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {
    
    const [groups, setGroups] = useState(["costas", "ombro", "bíceps", "tríceps"]);
    const [exercises, setExercises] = useState(["puxada frontal", "remada lateral", "remada curvada", "terra"]);
    const [groupSelected, setGroupSelected] = useState("");

    const navigationn = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerciseDetails() {
        navigationn.navigate("exercise");
    }

    return(
        <VStack flex={1}>
            <HomeHeader />

            <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Group 
                    name={item} 
                    isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()} //o elemento selecionado é igual ao item correspondente do array
                    onPress={() => setGroupSelected(item)}//a função seta o item
                />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            my={9}
            mx={4}
            maxH={12}
            />
            <VStack flex={1} mx={4}>
            <HStack justifyContent="space-between" mb={5}>
                <Heading color="gray.200" fontSize="md">
                    Exercícios
                </Heading>
                <Text color="gray.200" fontSize="md">
                    {exercises.length}
                </Text>
            </HStack> 

            <FlatList 
            data={exercises}
            keyExtractor={item => item}
            renderItem={({item}) => ( 
            <ExerciseCard 
            onPress={handleOpenExerciseDetails}
            />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{paddingBottom: 20}}
            />
        
            </VStack>
        </VStack>
    );
}