import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import Boton from './src/components/Boton';
import Input from './src/components/Input';

export default function App() {

  //escribir codigo Js
  //State de la aplicación
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  //Funcion suma
  const suma = () => {
    let sumatoria = (parseFloat(numero1) + parseFloat(numero2));
    setResultado(sumatoria);
  }
  //Funcion resta
  const resta = () => {
    let resta = (parseFloat(numero1) - parseFloat(numero2));
    setResultado(resta);
  }
  //Funcion suma
  const multiplicacion = () => {
    let multiplicacion = (parseFloat(numero1) * parseFloat(numero2));
    setResultado(multiplicacion);
  }
  //Funcion suma
  const division = () => {
    let division = (parseFloat(numero1) / parseFloat(numero2));
    setResultado(division);
  }

  const limpiar = () => {
    setNumero1(0)
    setNumero2(0)
    setResultado(0)
  }

  return (

    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Calculadora
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.poster}>Introduzca sus dos numeros</Text>
          <View style={styles.inputAlign1}>
            <Text style={styles.letter}>Numero 1: </Text>
            <TextInput
              placeholderTextColor={'#1C1C1C'}
              style={{ color: '#1C1C1C', fontSize: 20, padding: 10 }}
              placeholder='Numero 1: '
              value={numero1}
              onChangeText={setNumero1}
            />
          </View>
          <View style={styles.inputAlign2}>
            <Text style={styles.letter}>Numero 2: </Text>
            <TextInput
              placeholderTextColor={'#1C1C1C'}
              style={{ color: '#1C1C1C', fontSize: 20, padding: 10 }}
              placeholder='Numero 2: '
              value={numero2}
              onChangeText={setNumero2}
            />
          </View>

          <Boton
            texto='Sumar números'
            funcion={suma}
          />
          <Boton
            texto='Restar números'
            funcion={resta}
          />
          <Boton
            texto='Multiplicar números'
            funcion={multiplicacion}
          />
          <Boton
            texto='Dividir números'
            funcion={division}
          />



          <Text style={{ color: 'black', fontSize: 30 }}>Num 1: {numero1}</Text>
          <Text style={{ color: 'black', fontSize: 30 }}>Num 2: {numero2}</Text>
          <Text style={{ color: 'black', fontSize: 30 }}>Resultado: {resultado}</Text>

          <TouchableOpacity style={{
            backgroundColor: '#E80909',
            padding: 5,
            marginTop: 8,
            borderRadius: 10
          }}
            onPress={limpiar}
          >
            <Text style={{
              color: '#FFF',
              fontSize: 20
            }}>Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

//Codigo de diseño (es como el css en html)
//Por cada nueva clase en este caso style={styles.container}, (el .container es la clase)
//se debe de crear siempre dentro del StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 66,
    backgroundColor: '#3144E4',
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
    marginTop: 50,
  },
  poster: {
    fontSize: 34,
    textAlign: 'center',
  },
  letter: {
    marginTop: 20,
    fontSize: 30,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  inputAlign1: {
    borderWidth: 2,
    borderColor: '#3D3D3D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBBBBB',
    borderRadius: 15,
  },
  inputAlign2: {
    borderWidth: 2,
    borderColor: '#3D3D3D',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBBBBB',
    borderRadius: 15,
    marginBottom: 8,
  },
});
