import { Heading, HStack, VStack, Text } from "native-base";


export function HistoryCard() {

    return(
        <HStack 
        w="full" 
        px={4} 
        bg="gray.600"
        py={4}
        alignItems="center"
        justifyContent="space-between"
        mb={4}
        rounded={6}
        >
            <VStack mr={5}>
                <Heading textTransform="capitalize" fontSize="md" color="gray.100">
                    Costas
                </Heading>
                <Text color="gray.200" fontSize="lg" textTransform="capitalize" numberOfLines={1}>
                    Puxada frontal
                </Text>
            </VStack>
            <Text color="gray.200" fontSize="md">
                08:56
            </Text>
        </HStack>
    );
}