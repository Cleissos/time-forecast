import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const SearchHistory = ({ history, onSelect }) => {
  if (history.length === 0) return null;

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.historyItem}
      onPress={() => onSelect(item.city)}
    >
      <Text style={styles.historyCity}>{item.city}</Text>
      <View style={styles.historyDetails}>
        <Text style={styles.historyTemp}>{item.temperature}°C</Text>
        <Text style={styles.historyTime}>{item.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Buscas</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );
};


export default SearchHistory;