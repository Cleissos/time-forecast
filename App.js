import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/current-weather/CurrentWeather';
import ForecastChartScreen from './src/components/five-day-forecast/FiveDayForecast';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '✅ Égua do Tempo' }}
        />
        <Stack.Screen 
          name="ForecastChart" 
          component={ForecastChartScreen} 
          options={{ title: 'Previsão dos Próximos Dias' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}