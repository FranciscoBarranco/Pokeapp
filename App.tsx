import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './screens'
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Inicio'
          screenOptions={{
            title: '',
            // headerStyle: { backgroundColor: '#ef5350', height: 20, marginTop: -50 },
            headerShown: false,
          }}
          mode="modal"
        >
          {
            routes.map((props, index) => <Stack.Screen {...props} key={index} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
