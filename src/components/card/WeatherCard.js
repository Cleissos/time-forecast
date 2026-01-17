import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const WeatherCard = ({ weatherData, onShare }) => {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return '☀️';
      case 'Clouds':
        return '☁️';
      case 'Rain':
        return '🌧️';
      case 'Snow':
        return '❄️';
      case 'Thunderstorm':
        return '⛈️';
      default:
        return '🌤️';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.cityName}>
          {weatherData.name}, {weatherData.sys.country}
        </Text>
        <Text style={styles.temperature}>
          {Math.round(weatherData.main.temp)}°C
        </Text>
      </View>

      <View style={styles.weatherInfo}>
        <Text style={styles.weatherCondition}>
          {getWeatherIcon(weatherData.weather[0].main)} {weatherData.weather[0].description}
        </Text>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Umidade</Text>
            <Text style={styles.detailValue}>{weatherData.main.humidity}% 💧</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Vento</Text>
            <Text style={styles.detailValue}>{weatherData.wind.speed} m/s 💨</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Pressão</Text>
            <Text style={styles.detailValue}>{weatherData.main.pressure} hPa</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <Text style={styles.shareButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WeatherCard;