import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// 11강 PPT [Core Component] //

export default function App() {
    const [number, setNumber] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>결과: {number} </Text>
            <View style={styles.btnGroup}>
                <Button title="증가"
                        disabled={true}
                        color="pink"
                        onPress={() => setNumber(number + 1)} />
                <Button title="감소"
                        onPress={() => setNumber(number - 1)} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    btnGroup: {
        flexDirection: 'row',
        gap: 20,
        borderWidth: 2,
        borderColor: 'blue',
    },
    btn: {
        width: 200,
        height: 100,
    }
});
