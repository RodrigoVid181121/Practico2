import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Peliculas from '../screens/Peliculas';

const Stack = createStackNavigator();

export default function PeliculaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Peliculas" component={Peliculas}/>
        </Stack.Navigator>
    );
}