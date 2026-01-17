import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  weatherInfo: {
    marginBottom: 20,
  },
  weatherCondition: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shareButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  shareButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

export default styles