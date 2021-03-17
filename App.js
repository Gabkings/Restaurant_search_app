import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen name="Details"
         component={DetailsScreen}
         options={{ title: 'Business Search Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}