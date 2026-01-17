import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  historyItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  historyCity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  historyDetails: {
    alignItems: 'flex-end',
  },
  historyTemp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  historyTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
})

export default styles;