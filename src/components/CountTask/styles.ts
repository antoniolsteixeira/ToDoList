import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30
  },
  taskCreatedContainer: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  taskCreatedText: {
    marginLeft: 24,
    marginRight: 16,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE'
  },
  
  circle: {
    width: 25,
    height: 19,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    marginRight: 20,
  },
  taskCreatedcircle: {
    fontSize: 13,
    color: '#FFF',
    
  },
  completedCountContainer: {
    
    flexDirection: 'row',
    marginBottom: 10,
  },
  completedCountText: {
    
    fontSize: 14,
    color: '#8284FA',
    fontWeight: 'bold', 
    marginRight: 16,
  },
  counterLabel: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
});

/* 
inputContainer: {
    
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  taskButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 50,
    padding: 10,
    marginRight: 10,
  },
  taskButtonIcon: {
    color: '#FFFFFF',
  },
  deleteButton: {
    backgroundColor: '#FF4500',
    borderRadius: 50,
    padding: 10,
  },
  deleteButtonIcon: {
    color: '#FFFFFF',
  },


*/