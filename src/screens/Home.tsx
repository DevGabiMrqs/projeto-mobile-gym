import { HStack, VStack } from 'native-base'
import { HomeHeader } from '@components/HomeHeader'; 
import { Group } from '@components/Group';
import {useState} from 'react';

export function Home() {

    const [groupSelected, setGroupSelected] = useState("");

    return(
        <VStack flex={1}>
            <HomeHeader />
                <HStack>
                    <Group 
                        name='costas' 
                        isActive={groupSelected === "costas"}
                        onPress={() => setGroupSelected("costas")}
                        />
                    <Group 
                        name='bíceps' 
                        isActive={groupSelected === "bíceps"}
                        onPress={() => setGroupSelected("bíceps")}
                        />
                    <Group 
                        name='tríceps' 
                        isActive={groupSelected === "tríceps"}
                        onPress={() => setGroupSelected("tríceps")}
                        />
                    <Group 
                        name='ombro' 
                        isActive={groupSelected === "ombro"}
                        onPress={() => setGroupSelected("ombro")}
                        />
                </HStack>    
        </VStack>
    );
}