import { View, Text, FlatList, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useState, useMemo } from 'react';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const ForecastChartScreen = ({ route }) => {
  const forecastData = route?.params?.forecastData;

  const [selectedDay, setSelectedDay] = useState(null);

  if (!forecastData || !forecastData.list) {
    return (
      <View style={styles.loading}>
        <Text>Carregando previsão...</Text>
      </View>
    );
  }

  // 🔹 Agrupar dados por DIA LOCAL (sem UTC)
  const dailyForecast = useMemo(() => {
    const days = {};

    forecastData.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toLocaleDateString('pt-BR'); // ✅ dia correto

      if (!days[dayKey]) {
        days[dayKey] = {
          label: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
          items: [],
        };
      }

      days[dayKey].items.push(item);
    });

    return Object.entries(days).slice(0, 5);
  }, [forecastData]);

  // 🔹 Dados do gráfico
  const chartData = {
    labels: dailyForecast.map(([_, day]) => day.label),
    datasets: [
      {
        data: dailyForecast.map(([_, day]) => {
          const temps = day.items.map((i) => i.main.temp);
          const avg = temps.reduce((a, b) => a + b, 0) / temps.length;
          return Math.round(avg);
        }),
      },
    ],
  };

  // 🔹 Lista baseada no dia selecionado
  const listData =
    selectedDay !== null
      ? dailyForecast[selectedDay][1].items
      : dailyForecast[0][1].items;

  return (
    <View style={{flex: 1}}>
    <FlatList
      data={listData}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={true}
      ListHeaderComponent={
        <>
          <Text style={styles.title}>Previsão para 5 Dias</Text>

          <View style={styles.chartContainer}>
            <LineChart
              data={chartData}
              width={screenWidth - 40}
              height={220}
              onDataPointClick={({ index }) => {
                setSelectedDay(index);
              }}
              chartConfig={{
                backgroundColor: '#2196F3',
                backgroundGradientFrom: '#2196F3',
                backgroundGradientTo: '#21CBF3',
                decimalPlaces: 0,
                color: (opacity = 1) =>
                  `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) =>
                  `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
            />

            {selectedDay !== null && (
              <Text style={{ color: '#fff', marginTop: 8 }}>
                📅 {new Date(dailyForecast[selectedDay][0].dt * 1000)
                  .toLocaleDateString('pt-BR', {
                    weekday: 'long',
                    day: '2-digit',
                    month: '2-digit',
                  })}
              </Text>
            )}
          </View>

          <Text style={styles.sectionTitle}>Detalhes por Horário</Text>
        </>
      }
      renderItem={({ item }) => {
        const date = new Date(item.dt * 1000);

        return (
          <View style={styles.forecastItem}>
            <Text style={styles.forecastTime}>
              {date.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>

            <Text style={styles.forecastTemp}>
              {Math.round(item.main.temp)}°C
            </Text>

            <Text style={styles.forecastCondition}>
              {item.weather[0].description}
            </Text>
            <View style={styles.forecastDetails}>
              <Text>💧 {item.main.humidity}%</Text>
              <Text>💨 {item.wind.speed} m/s</Text>
            </View>
          </View>
        );
      }}
      
    />
    </View>
  );
};

export default ForecastChartScreen;

