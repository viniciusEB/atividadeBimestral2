import { StatusBar } from 'expo-status-bar';
import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from './src/screens/Lista/Lista';
import Detalhes from './src/screens/Detalhes/Detalhes';
import Favoritos from './src/screens/Favoritos/Favoritos';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { RootStackParamList } from './src/types/navigation';
import { capitalize } from './src/utils/format';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Lista"
          screenOptions={{
            headerStyle: { backgroundColor: colors.surface },
            headerTintColor: colors.text,
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          <Stack.Screen
            name="Lista"
            component={Lista}
            options={({ navigation }) => ({
              title: 'Pokédex',
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Favoritos')}>
                  <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
                    ♥ Favoritos
                  </Text>
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={({ route }) => ({ title: capitalize(route.params.name) })}
          />
          <Stack.Screen
            name="Favoritos"
            component={Favoritos}
            options={{ title: 'Favoritos' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </FavoritesProvider>
  );
}