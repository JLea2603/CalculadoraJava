import { StatusBar } from 'expo-status-bar';
import { Text,View,TextInput } from 'react-native';

export default function Input({
    textPlaceHolder,
    valorNumero,
    valorSetNumero
}){
    return(
        <TextInput
             placeholderTextColor={'blue'}
             style={{color: 'blue', fontSize: 20, padding: 10 }}
             placeholder={textPlaceHolder}
             value={valorNumero}
             onChangeText={valorSetNumero}
        />
    )
}
