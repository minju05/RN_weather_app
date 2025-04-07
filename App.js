import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// 10강 PPT [StatusBar] //

export default function App() {
    return (
        <View style={ styles.container }>
            <Text style={{ ...styles.text, color: 'blue' }}>리액트 네이티브</Text>
            <StatusBar backgroundColor="white"
                       barStyle='light-content' />
            {/*<StatusBar style='auto' />*/}
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
        color: 'red',
        justifyContent: 'center',
    }
});
