import React, { useState }from 'react'
import { View, Text} from 'react-native';


import { styles } from './styles';
import { Home } from '../../screens/Home'

type TaskCount = {
  totalCount: number;
  totalCompleted: number;  
}

{/*Aqui iremos colocar o resultado da contagem de tarefas criadas e tarefas concluidas*/}
export  function CountTask({totalCount, totalCompleted}: TaskCount) { 
  
   
    return (
      
      <View style={styles.container}>
          {/*Aqui iremos contabilizar todas as tarefas criadas, quando inserir a tarefa no input e clicar no 
          botão adicionar, teremos que contabilizar a quantida anterior com o novo valor que receberemos, mas se a tarefa for excluida a quantidade vai diminuir  */}
          <View style={styles.taskCreatedContainer}>
              <Text style={styles.taskCreatedText}>Criadas</Text>
              <View style={[styles.circle]}>
                {/*Preciso receber  */}
                  <Text style={styles.taskCreatedcircle}>{totalCount}</Text>{/*Aqui irei ter uma propriedade onde vou receber o valor da quantidade de tarefas criadas  */}
              </View>
          </View>
        
          <View style={styles.completedCountContainer}>
            {/* Aqui iremos contabilizar todas as tarefas concluidas após o botão checkmark for clicado, mas ao contrário da das tarefas criadas essa não vai diminuir a quantidade*/}
              <Text style={styles.completedCountText}>Concluidas</Text>{/* Aqui irei receber a propriedade com a quantidade de tarefas comcluidas */}
              <View style={[styles.circle]}>
                  <Text style={styles.taskCreatedcircle}>{totalCompleted}</Text>
              </View>
          </View>
      </View>
      
    );
  };
  