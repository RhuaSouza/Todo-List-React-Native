import React, { useState } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [lista, SetLista] = useState([]);

  const ClickAddTask = () => {
    if (text === "") {
      alert("Preencha o espaço");
    } else {
      SetLista([
        ...lista,
        {
          tarefas: text,
          completas: false,
        },
      ]);
      console.log(lista);
      setText("");
    }
  };

  const ApagarTarefa = (index) => {
    const FecharTarefa = [...lista];
    FecharTarefa.splice(index, 1);
    SetLista(FecharTarefa);
  };

  const tarefasConcluidas = (index) => {
    const concluida = [...lista];
    concluida[index].completas = !concluida[index].completas;
    SetLista(concluida);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*body*/}
      <View style={styles.todo}>
        <Text style={styles.titulo}>To-do List</Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(text) => setText(text)}
            value={text}
            placeholder="Dgitie sua task"
          />
          {/*Botão de Adicionar Tarefa*/}
          <TouchableOpacity
            style={{
              backgroundColor: "#FF6347",
              height: 50,
              width: 50,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={ClickAddTask}
          >
            <Text style={{ color: "white", fontSize: 20 }}>+</Text>
          </TouchableOpacity>
        </View>

        {/*A lista de tarefas*/}
        {lista.map((item, index) => (
          <View
            key={index}
            style={[
              styles.tarefaContainer,
              { backgroundColor: item.completas ? "#32CD32" : "#BCBCBC" },
            ]}
          >
            <Text style={styles.tarefas}>{item.tarefas}</Text>

            <View style={{ flexDirection: "row" }}>
              {/*Botão de Concluir tarefa*/}
              <TouchableOpacity
                style={styles.btnConcluir}
                onPress={() => tarefasConcluidas(index)}
              >
                <Text style={{ color: "white", fontSize: 20 }}>+</Text>
              </TouchableOpacity>

              {/*Boão de Apagar*/}
              <TouchableOpacity
                style={styles.btnApagar}
                onPress={() => ApagarTarefa(index)}
              >
                <Text style={{ color: "white", fontSize: 20 }}>x</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEBCD",
    flex: 1,
    alignItems: "center",
  },
  todo: {
    marginTop: 50,
    backgroundColor: "white",
    width: 350,
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    borderColor: "black",
    width: 250,
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,
    paddingStart: 10,
    marginRight: 3,
  },
  tarefas: {
    fontSize: 15,
    marginRight: 3,
  },
  tarefaContainer: {
    backgroundColor: "#BCBCBC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    flexWrap: "wrap",
  },
  btnApagar: {
    backgroundColor: "red",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnConcluir: {
    backgroundColor: "green",
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
