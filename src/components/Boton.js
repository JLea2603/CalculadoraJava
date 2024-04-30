import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function Button({ texto, funcion}) {
    return (
        <TouchableOpacity
            onPress={funcion}
            style={styles.Btn}>
            <Text style={{
                color: '#FFFFFF',
                fontSize: 25
            }}>
                {texto}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Btn: {
        backgroundColor: '#366D3E',
        padding: 5,
        marginTop: 10,
        borderRadius: 17,
    },
});
