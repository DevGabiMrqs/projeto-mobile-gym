import { Heading, HStack} from "native-base";

type Props = {
    title: string,
}

export function ScreenHeader({title} : Props) {


    return(
        <HStack bg="gray.600" pt={16} pb={5} px={8} justifyContent="center">
            <Heading color="gray.100" fontFamily="heading" fontSize="lg">
                {title}
            </Heading>
        </HStack>
    );
}