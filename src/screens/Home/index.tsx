import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList , Image, Alert} from "react-native";
import { useState } from 'react'

import { styles } from './styles';
import { CountTask } from './../../components/CountTask';
import { TodoList } from '../../components/TodoList';
import botaoImg from './../../components/assets/plus.png';
import emptyListImage from './../../../src/assets/clipboard.png'
import { TaskDTO } from '../../dtos/TaskDTO';
import { uuid } from '../../components/utils/uuid';



export function Home() {
  

  const rocket = require( "./../../components/assets/rocket.png")
  const toImage = require( "./../../components/assets/to.png")
  const doImage = require( "./../../components/assets/do.png")

  const [tasks, setTasks] = useState<TaskDTO[]>([])
  const [newTask, setNewTask] = useState('')
  
  

  // Função para adicionar uma nova tarefa
  function handleTaskAdd() {
    // Lógica para adicionar uma nova tarefa
    if(newTask !== '' && newTask.length > 4){
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim()}
      ])

      setNewTask('')
    } 
  }

  // Função para remover uma tarefa
  function handleTaskRemove(id: string) {
    Alert.alert('Confirmação para excluir a tarefa', 'Deseja excluir a tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => 
        setTasks((tasks) => tasks.filter((newTask) => newTask.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    
    
  }
  function handleTaskDone(id: string){
    setTasks((tasks) => 
      tasks.map((task) =>{
        task.id === id ? (task.isCompleted = !task.isCompleted) : null
        return task
      })
    )
  }

  
  const totalTaksCreat = tasks.length
  const totalTaskcompleted = tasks.filter(
    ({ isCompleted}) => isCompleted).length
  return(

    // Contêiner principal da tela
    <View style={styles.container}>
      
      {/* Cabeçalho da lista de tarefas */}
      <View style={styles.headerTodo}>
        {/* Logo da lista de tarefas */}
      
                
                <View  style={styles.todoImage} >
                    <Image source={rocket}/>
                    <Image source={toImage}/>
                    <Image source={doImage}/>
                    
                </View>
            
        {/* Formulário para adicionar tarefas */}
        <View style={styles.form}>
          {/* Campo de entrada de texto para adicionar tarefas */}
          <TextInput 
            value={newTask}
            onChangeText={setNewTask}
            style={styles.input}
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor="#6B6B6B"
            
            
          />
          {/* Botão para adicionar nova tarefa */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleTaskAdd}>
           <Image source={botaoImg} />
          </TouchableOpacity> 
       
        </View>
         
      </View>
      <CountTask 
        totalCount = {totalTaksCreat}
        totalCompleted = {totalTaskcompleted}
      />
      <View style={styles.Hr} />

        {/* esse trecho de código, estamos definindo uma FlatList que renderiza uma lista de tarefas, onde cada tarefa é representada pelo componente TodoList.*/}
        <FlatList 
            style={styles.formGeral}
            data={tasks} //data recebe um array de lista de tarefas que contém todas as tarefas 
            keyExtractor={(tasks) => tasks.id}
            renderItem={({ item }) => (// o renderItem que é a propriedade que chama o TodoList
            <TodoList //Cada item da lista é renderizado pelo componente TodoList 
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskRemove={() => handleTaskRemove(item.id)}
              {...item}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.Emptycontainer}>
                <Image source={require('./../../../src/assets/clipboard.png')}/>
                <Text style={styles.EmptyComponent}>
                  Você ainda não tem tarefas cadastradas
                  Crie tarefas e organize seus itens a fazer
                </Text>
              
            </View>
            )}
          />
        </View>
  );
}
   {/* A FlatList recebe as seguintes props:
        style: define o estilo do componente FlatList.
        data: é um array que contém os dados que serão renderizados na lista, no caso, participants.
        keyExtractor: é uma função que extrai uma chave única para cada item no array de dados. No exemplo, estamos usando o próprio item como chave.
        renderItem: é uma função que define como cada item da lista deve ser renderizado. Aqui, estamos usando uma função anônima para renderizar cada item
        usando o componente TodoList. A função recebe um objeto que contém a propriedade item, que é o item atual do array de dados. Em seguida, passamos
        esse item para o componente TodoList através da prop task. Além disso, estamos definindo uma chave única para cada componente TodoList usando o próprio item.
        onRemove: é uma função que será chamada quando o usuário remover uma tarefa. Essa função é passada para o componente TodoList como uma prop.
        Por fim, o componente FlatList é fechado e estamos encerrando a View que envolve todo o conteúdo.
  
  
  */}
