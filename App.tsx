import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/pages/Home';
import UsersPage from './src/pages/Users/Users';
import UserDetails from './src/pages/Users/details/UserDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ title: "Acesso" }}/>
        <Stack.Screen name="UsersPage" component={UsersPage}/>
        <Stack.Screen name="UserDetails" component={UserDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}