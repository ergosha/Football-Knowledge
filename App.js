import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StarterScreen from './components/StarterScreen';
import GameScreen from './components/GameScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerStyle: {
          backgroundColor: 'lightblue', 
        },
        headerTitleAlign: 'center'
      }}
      >
        {/* Defining the Starter Screen*/}
        <Stack.Screen name='Football Knowledge' component={StarterScreen}/>
        {/* Defining the Game Screen*/}
        <Stack.Screen name='GameScreen' component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: 'lightblue'
  }
});
