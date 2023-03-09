import {Button as NativeBaseButton, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline'
}

export function Button({title, variant, ...rest} : Props) {


    return (
      <NativeBaseButton 
      {...rest} 
      bg={variant === "outline" ?"transparent" : "green.700"}
      borderWidth={variant === "outline"  ? 1  :  0}
      borderColor="green.500"
      mb={23}
      w="full" 
      maxWidth={300}
      _pressed={{
        bg: variant === "outline" ?"gray.800" :"green.500"
      }}
      >
        <Text 
        color={variant === "outline" ?"green.500" :"white"} 
        fontFamily="heading"
        >
           {title}
        </Text>
      </NativeBaseButton>
    );
}