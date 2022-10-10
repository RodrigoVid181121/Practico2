import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Proximamente from '../screens/Proximamente';

const Stack = createStackNavigator();

export default function ProximaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Proximamente" component={Proximamente} options={{title:'Proximamente'}}/>
        </Stack.Navigator>
    );
}