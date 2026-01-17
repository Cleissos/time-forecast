import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      {/* Obs: Esse ActivityIndicator é a o circulo de caregamente que está em azul. */}
      <ActivityIndicator size="large" color="#2196F3" />  
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
};

export default Loading;

