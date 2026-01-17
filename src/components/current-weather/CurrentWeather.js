import { useState } from 'react';
import styles from './styles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Vibration,
  Share
} from 'react-native';
import { fetchWeatherData, fetchForecastData } from '../../services/weatherAPI';
import WeatherCard from '../card/WeatherCard';
import Loading from '../loading/Loading';
import SearchHistory from '../history/SearchHistory';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  // Função de compartilhamento com link do Expo Snack
  const handleShare = async () => {
    if (!weatherData) return;

    try {
      // SEU LINK DO EXPO SNACK
      const EXPO_SNACK_LINK = 'https://snack.expo.dev/@cristianowanzeler/previsaodotempo';
      
      const message = `🌤️ PREVISÃO DO TEMPO 🌤️

📍 Local: ${weatherData.name}, ${weatherData.sys.country}
🌡️ Temperatura: ${Math.round(weatherData.main.temp)}°C
🌈 Condição: ${weatherData.weather[0].description}
💧 Umidade: ${weatherData.main.humidity}%
💨 Vento: ${weatherData.wind.speed} m/s
📊 Pressão: ${weatherData.main.pressure} hPa

━━━━━━━━━━━━━━━━━━━
📱 *APP PREVISÃO DO TEMPO*

🔗 Acesse e teste online:
${EXPO_SNACK_LINK}

━━━━━━━━━━━━━━━━━━━
✨ Funcionalidades do App:
• Previsão atual e 5 dias
• Gráficos interativos
• Histórico de buscas
• Compartilhamento

#PrevisãoDoTempo #${weatherData.name.replace(/\s/g, '')} #AppReactNative`;

      const shareOptions = {
        message,
        title: `Previsão em ${weatherData.name} - App Tempo`,
        url: EXPO_SNACK_LINK,
      };

      await Share.share(shareOptions);
      
    } catch (error) {
      console.log('Erro ao compartilhar:', error);
      Alert.alert(
        'Não foi possível compartilhar',
        'Tente novamente ou copie o link manualmente: https://snack.expo.dev/@cristianowanzeler/previsaodotempo',
        [{ text: 'OK' }]
      );
    }
  };

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Digite o nome de uma cidade');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      
      // Adicionar ao histórico
      const newSearch = {
        id: Date.now().toString(),
        city: `${data.name}, ${data.sys.country}`,
        temperature: Math.round(data.main.temp),
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setSearchHistory(prev => [newSearch, ...prev.slice(0, 4)]);
    } catch (err) {
      setError('Cidade não encontrada. Tente novamente.');
      Vibration.vibrate(500); // Feedback tátil
    } finally {
      setLoading(false);
    }
  };

  const handleForecastPress = async () => {
    if (!city.trim()) return;
    
    setLoading(true);
    try {
      const forecastData = await fetchForecastData(city);
      navigation.navigate('ForecastChart', { forecastData });
    } catch (err) {
      setError('Erro ao buscar previsão');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da cidade"
          value={city}
          onChangeText={setCity}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
{/* Aqui o Loading é chamado */}
      {loading && <Loading />}

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
      {/* Fim loading */}

{/* Aqui o Card é chamado (WeatherCard) */}
      {weatherData && (
        <>
          <WeatherCard 
            weatherData={weatherData} 
            onForecastPress={handleForecastPress}
            onShare={handleShare}
          />
          
          <TouchableOpacity 
            style={styles.forecastButton}
            onPress={handleForecastPress}
          >
            <Text style={styles.forecastButtonText}>
              Ver Previsão dos Próximos Dias
            </Text>
          </TouchableOpacity>
        </>
      )}
{/* Aqui terminha o WheaterCard */}

{/* Aqui o histórico é chamado */}
      {searchHistory.length > 0 && (
        <SearchHistory 
          history={searchHistory}
          onSelect={(selectedCity) => {
            setCity(selectedCity.split(',')[0]);
          }}
        />
      )}
      {/* Fim histórico */}
    </View>
  );
};


export default HomeScreen;