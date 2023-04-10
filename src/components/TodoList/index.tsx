
// Importando as bibliotecas necessárias do React Native
import React from 'react'
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


// Importando o arquivo de estilos da aplicação
import { styles } from "./styles";
import { TaskDTO } from '../../dtos/TaskDTO';


type Taskprops = TaskDTO & {
  onTaskDone: (id: string) => void
  onTaskRemove: (id: string) => void
}


// Declarando o componente TodoList
export function TodoList({ id,
   title, 
   isCompleted, 
   onTaskDone, 
   onTaskRemove
  }: Taskprops) {
  return (
    // Definindo o estilo da View principal
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onTaskDone(id)} style={styles.check} >
        <MaterialCommunityIcons 
          name={isCompleted ? 
            "checkbox-marked-circle-outline" :
            "checkbox-blank-circle-outline"
        } 
          size={22} 
          color={ isCompleted ? "#5E60CE": '#4EA8DE'   }
        />
          
      </TouchableOpacity>
      {/* Definindo o estilo da View secundária*/}
      <View style={styles.form}>
        <Text style={isCompleted ? styles.textDone: styles.taskText} numberOfLines={4} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      {/* Definindo o estilo do botão de remover tarefa*/}
      <TouchableOpacity onPress={() => onTaskRemove(id)}>
        <Text style={styles.buttonText} >
          <MaterialCommunityIcons style={styles.Icon}
            name="delete"
            size={20}
            color="#808080"
          />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

{/* Importa o React e vários componentes específicos do React Native, incluindo Text, View e TouchableOpacity,
 que serão usados para construir a interface do usuário.

Importa o estilo específico que será usado para formatar os componentes.

Define o tipo de objeto Props que será passado para o componente TodoList.

Define a função TodoList que receberá a prop task e usará isso para exibir uma tarefa específica.

O componente TodoList retorna uma View que contém dois componentes filhos: um View e um TouchableOpacity.

O componente filho View contém um Text que exibe a prop task.

O componente filho TouchableOpacity contém um Text que exibe o texto "Remover".

Quando o usuário toca no botão "Remover", uma ação correspondente é acionada (que não está implementada neste código).

No geral, este código é um componente React Native simples que exibe uma tarefa e um botão de remoção associado a essa tarefa.
 O estilo também foi definido em um arquivo externo para manter o código organizado e fácil de ler.*/}