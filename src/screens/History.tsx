import {VStack, Heading, Text, SectionList} from 'native-base'
import { ScreenHeader } from '@components/ScreenHeader'; 
import { HistoryCard } from '@components/HistoryCard';
import {useState} from 'react';


export function History(){
    const [exercises,  setExercises] = useState([{
        title:"01.08.2022",
        data:["puxada frontal", "puxada unilateral"],
    }, 
    {
        title:"02.08.2022",
        data:["puxada frontal"]
    }
]); //se eu trocar o estado por um array vazio[], a mensagem do listEmptyComponent vai aparecer



    return(
        <VStack flex={1}>
            <ScreenHeader title='Histórico de Exercícios'/>
            <SectionList
            //aqui estou renderizando o historyCard
            sections={exercises} 
            keyExtractor={item => item}
            renderItem={({item}) => (
                <HistoryCard/>
            )}
            renderSectionHeader={({section}) => ( //esse section é o title 
               <Heading color="gray.100" fontSize="md" mt={6} mb={3}>
                {section.title}
               </Heading>
            )}
            px={4}
            contentContainerStyle={[].length === 0 && {flex: 1, justifyContent: "center"}}
            ListEmptyComponent={() => (
                <Text color="gray.100" textAlign="center">
                    Não há exercícios registrados ainda.
                    {'\n'}
                    Vamos fazer exercícios hoje?
                </Text>
            )}
            />
        </VStack>
    );
}