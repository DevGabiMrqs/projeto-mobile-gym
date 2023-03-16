import { HStack, VStack, FlatList, Heading, Text } from 'native-base'
import { HomeHeader } from '@components/HomeHeader'; 
import { Group } from '@components/Group';
import {useState} from 'react';
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {

    const [groupSelected, setGroupSelected] = useState("");
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
                    isActive={groupSelected === item} //o elemento é igual a costas
                    onPress={() => setGroupSelected(item)}//a função seta costas
                />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            my={9}
            mx={4}
            maxH={10}
            />
            <VStack flex={1} mx={4}>
            <HStack justifyContent="space-between" mb={5}>
                <Heading color="gray.200" fontSize="md">
                    Exercícios
                </Heading>
                <Text color="gray.200" fontSize="md">
                    4
                </Text>
            </HStack> 
            <ExerciseCard />
            </VStack>
        </VStack>
    );
}