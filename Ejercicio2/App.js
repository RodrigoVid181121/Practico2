/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useCallback, useRef } from 'react';
 import {View, Text, SafeAreaView, Modal, Button, TouchableHighlight,Alert } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import Navigation from './src/Navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";


 export default function App(){
  
  return(
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>

    
  );
 }
