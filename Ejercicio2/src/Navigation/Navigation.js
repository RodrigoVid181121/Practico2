import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PeliculaStack from './PeliculaStack';
import SerieStack from './SerieStack';
import ProximaStack from './ProximaStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) =>{
                let icon = '';
                switch(route.name){
                    case 'Pelicula':
                        icon = "videocam";
                        break;
                    case 'Serie':
                        icon = "tv";
                        break;
                    case 'Proximamente':
                        icon = 'alert';
                        break;
                }
                return <Icon name={icon} size={size} color={color} />
            }
        })}>
            <Tab.Screen name="Pelicula" component={PeliculaStack}  />
            <Tab.Screen name="Serie" component={SerieStack} options={{title:"Serie"}}/>
            <Tab.Screen name="Proximamente" component={ProximaStack} options={{title:"Proximamente"}}/>
        </Tab.Navigator>
    );
}