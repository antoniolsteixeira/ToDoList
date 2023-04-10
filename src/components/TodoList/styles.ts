import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        alignItems: 'center'
        
        
    },
    //O flex de 1 aqui no form é para que o texto só ocupe o compo ao lado do botão e não empure o botão
    form: {
      flex:1,
      paddingRight: 7,
      
    },
    taskText: {
        
        fontSize: 14,
        color: '#FFF',
        
        textDecorationLine: 'none'   
    },
     // Estilo do botão de remover tarefas
     button: {
        borderRadius: 5
    },
    // Estilo do texto do botão de adicionar tarefas
    buttonText: {
        color: '#FFF',
        fontSize: 10,
        paddingRight: 15
    },
    Icon: {

    },
    checkBox: {
        flex: 1,
        height: 20,
        width:20, 
        
      },
      check:{
        padding: 10
      },
      checkButton: {
        
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 10,
        width: 20,
        height: 20,
        marginLeft: 20,
      
        paddingRight: '10%' 
      },
      checked: {
        backgroundColor: '#5E60CE',
        
        
        
      },
      textDone: {
        fontSize: 14,
        color: '#6B6B6B',
        textDecorationLine: 'line-through',
        
      }

})