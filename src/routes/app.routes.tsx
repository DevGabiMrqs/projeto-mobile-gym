//ESSA É A ROTA PRIVADA

import { Platform } from 'react-native' //Com o platform conseguimos distinguir em qual plataforma o mobile está rodando(IOs ou Android)
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

import { Home } from '@screens/Home'
import { Exercise } from '@screens/Exercise'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'
import { background, border } from 'native-base/lib/typescript/theme/styled-system'


type AppRoutes = {
    home: undefined;
    exercise: undefined;
    history: undefined;
    profile: undefined;
}

export type AppNavigatiorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen} = createBottomTabNavigator<AppRoutes>(); //passo AppRoutes aqui pois em name<Screen<Navigator, ele verifica se a tipagem do name está tipado, se não acusa erro.

export function AppRoutes() {
    const { sizes, colors } = useTheme();
    const iconSize = sizes[6];

    return (
        <Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto' : 96,
                paddingBottom:sizes[8],
                paddingTop:sizes[8]
            }
        }}>
            <Screen 
            name="home"
            component={Home}
            options ={{
            tabBarIcon: ({color}) => (
                <HomeSvg 
                fill={color}
                width={iconSize}
                height={iconSize}
                />) 
            }} //options para acessar as opções de customização
            />
            <Screen 
            name="exercise"
            component={Exercise}
            options={{
                tabBarButton: () => null
            }}
            />
            <Screen 
            name="history"
            component={History}
            options={{
                tabBarIcon: ({color}) => (
                    <HistorySvg
                    fill={color}
                    width={iconSize}
                    height={iconSize}
                />)
            }}
            />
            <Screen 
            name="profile"
            component={Profile}
            options= {{
                tabBarIcon: ({color}) => (
                    <ProfileSvg
                    fill={color}
                    width={iconSize}
                    height={iconSize}
                />)
            }}
            />
            
        </Navigator>
    );
}