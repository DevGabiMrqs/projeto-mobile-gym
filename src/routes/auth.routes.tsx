//ESSA É A ROTA PÚBLICA

import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';

type AuthRoutes = {
    signIn: undefined;  //undefined pois não recebem parâmetro
    signUp: undefined;  //undefined pois não recebem parâmetro
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp <AuthRoutes> //Esse auth Routes é o conteúdo da minha rota, no caso o signIn e signUp

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>(); //Navegador e screen é recebido na barra de navegação, authRoutes é passado aqui pois ele identifica o name que posso passar na screen.  

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
            name="signIn"
            component={SignIn}
            />
            <Screen 
            name="signUp"
            component={SignUp}
            />
        </Navigator>
    )
}