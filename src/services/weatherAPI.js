const API_KEY = '515166e17ba9543146c1df7981df4c52'; // Obtenha em: https://openweathermap.org/api
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    
    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchForecastData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    
    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};