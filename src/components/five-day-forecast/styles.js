import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
  paddingHorizontal: 20,
  paddingBottom: 100, // espaço para não cortar o último item
  backgroundColor: '#f0f8ff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    elevation: 3,
  },
  chart: {
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  forecastTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    width: 50,
  },
  forecastTemp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5722',
    width: 60,
  },
  forecastCondition: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginLeft: 10,
  },
  forecastDetails: {
    alignItems: 'flex-end',
  },
  forecastDetail: {
    fontSize: 12,
    color: '#999',
  },
})

export default styles;