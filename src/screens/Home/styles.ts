import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    // Estilo do container principal da tela
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        
    },
    formGeral:{
        padding: 20,
        marginTop: 21
    },
    // Estilo do cabeçalho
    headerTodo: {
        width: '100%',
        height: 173,
        justifyContent: 'space-evenly',
        backgroundColor: '#0D0D0D'
    },
    // Estilo do texto do cabeçalho
    textHeader: {
        marginTop: 56,
        color: '#FDFCFE',
        fontSize: 20,
        fontWeight: 'bold',
    },
    // Estilo do logo do cabeçalho
    logo: {
        paddingTop:70,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    // Estilo do input de adicionar tarefas
    input: {
        flex:1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize:16,
        marginRight:8
    },
    // Estilo do botão de adicionar tarefas
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Estilo do texto do botão de adicionar tarefas
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    Hr: {
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        marginVertical: 1,
         marginHorizontal: 20
      },
    // Estilo do formulário para adicionar tarefas
    form: {
        width:'100%',
        flexDirection: 'row',
        height: 142,
        paddingTop: 60,
        paddingHorizontal: 20,
        flexWrap: 'wrap'
    },
    EmptyComponent: {
        color: '#808080',
        fontSize: 14,
        textAlign: 'center',
        marginTop:20
        
    },
    Emptycontainer: {
        flex: 1,
        alignItems: 'center',
    },
    todoImage: {
        
        marginTop: '35%',
        flexDirection: 'row',
        marginLeft: 132,
        paddingBottom: 30   
    },
   
});

/* Estilos:
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1, // Define o container como flexível para ocupar todo o espaço disponível na tela
        backgroundColor: '#333333', // Define a cor de fundo do container como cinza escuro
    },
    headerTodo: {
        width: '100%', // Define a largura do cabeçalho como 100% da largura disponível
        height: 173, // Define a altura do cabeçalho como 173 unidades
        justifyContent: 'space-evenly', // Define a distribuição do espaço entre os elementos do cabeçalho como igual
        backgroundColor: '#0D0D0D' // Define a cor de fundo do cabeçalho como preto
    },
    textHeader: {
        marginTop: 56, // Define a margem superior do elemento como 56 unidades
        color: '#FDFCFE', // Define a cor do texto como branco
        fontSize: 20, // Define o tamanho da fonte do texto como 20 unidades
        fontWeight: 'bold', // Define a espessura da fonte do texto como negrito
    },
    logo: {
        paddingTop:70, // Define a margem superior do elemento como 70 unidades
        flexDirection: 'row', // Define a orientação dos elementos do elemento como horizontal
        justifyContent: 'space-evenly', // Define a distribuição do espaço entre os elementos do elemento como igual
    },
    input: {
        flex:1, // Define o elemento como flexível para ocupar todo o espaço disponível
        height: 56, // Define a altura do elemento como 56 unidades
        backgroundColor: '#262626', // Define a cor de fundo do elemento como cinza
        borderRadius: 5, // Define o raio dos cantos do elemento como 5 unidades
        color: '#FFF', // Define a cor do texto como branco
        padding: 16, // Define o preenchimento interno do elemento como 16 unidades
        fontSize:16, // Define o tamanho da fonte do texto como 16 unidades
        marginRight:8 // Define a margem à direita do elemento como 8 unidades
    },
    button: {
        width: 56, // Define a largura do elemento como 56 unidades
        height: 56, // Define a altura do elemento como 56 unidades
        borderRadius: 5, // Define o raio dos cantos do elemento como 5 unidades
        backgroundColor: '#1E6F9F', // Define a cor de fundo do elemento como azul
        alignItems: 'center', // Centraliza os elementos horizontalmente dentro do elemento
        justifyContent: 'center' // Centraliza os elementos verticalmente dentro do elemento
    },
    buttonText: {
        color: '#FFF', // Define a cor do texto como branco
        fontSize: 24 // Define o tamanho da fonte do texto como 24 unidades
    },
   form: {
    width: '100%', // Define a largura do formulário como 100% da largura disponível
    flexDirection: 'row', // Define a orientação dos elementos do formulário como horizontal
    height: 142, // Define a altura do formulário como 142 unidades
    paddingTop: 70, // Define a margem superior do formulário como 70 unidades
    paddingHorizontal: 10, // Define o preenchimento interno horizontal
    alignItems: 'center', // Centraliza os elementos verticalmente dentro do formulário
    justifyContent: 'center', // Centraliza os elementos horizontalmente dentro do formulário
    backgroundColor: '#262626', // Define a cor de fundo do formulário como cinza
    borderRadius: 5 // Define o raio dos cantos do formulário como 5 unidades
},
});



- container: define o estilo para a View que envolve todo o conteúdo da tela;
- headerTodo: define o estilo para a View que contém o cabeçalho;
- textHeader: define o estilo para os Texts que exibem o nome da aplicação no cabeçalho;
- logo: define o estilo para a View que contém o logo da aplicação;
- input: define o estilo para o TextInput que é usado para inserir novas tarefas;
- button: define o estilo para o TouchableOpacity que é usado para adicionar novas tarefas;
- buttonText: define o estilo para o Text que é exibido no botão de adicionar tarefas;
- form: define o estilo para a View que envolve o input e o botão de adicionar tarefas. */