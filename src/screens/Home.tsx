import { HStack, VStack, FlatList, Heading, Text } from 'native-base'
import { HomeHeader } from '@components/HomeHeader'; 
import { Group } from '@components/Group';
import {useState} from 'react';
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {

    const [groupSelected, setGroupSelected] = useState("");
    const [exercises, setExercises] = useState(["puxada frontal", "remada lateral", "remada curvada", "terra"]);
    const [groups, setGroups] = useState(["costas", "ombro", "bíceps", "tríceps"]);

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
            <ExerciseCard/>
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{paddingBottom: 20}}
            />
            </VStack>
        </VStack>
    );
}