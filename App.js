import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from './screens/Cart';
import PreparationModal from './screens/PreparationModal';
import Delivery from './screens/Delivery';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='restaurant' component={Restaurant} options={{ headerShown: false }} />
          <Stack.Screen name='cart' component={Cart} options={{ presentation: 'modal', headerShown: false }} />
          <Stack.Screen name='preparationmodal' component={PreparationModal} options={{ presentation: 'fullScreenModal', headerShown: false }} />
          <Stack.Screen name='delivery' component={Delivery} options={{ presentation: 'fullScreenModal', headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
}


