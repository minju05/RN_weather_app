import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.cityCon}>
                <Text style={styles.city}>Jongro</Text>
            </View>
            <View style={styles.weatherCon}>
                <View style={styles.day}>
                    <Text style={styles.regDate}>April 8, Tues., 5:00</Text>
                    <Text style={styles.desc}>Sunny</Text>
                </View>
                <View style={styles.tempCon}>
                    <Text style={styles.temp}>13</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe01a',
    },
    cityCon: {
        flex: 1,
    },
    weatherCon: {
        flex: 3,
    },
    day: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempCon: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    city: {
        flex: 1,
        marginTop: 40,
        paddingTop: 10,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    regDate: {
        paddingTop: 8,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 13,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 20, // 둥근 모서리
        overflow: 'hidden', // 오류 방지
    },
    desc: {
        flex: 1.5,
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 100,
    }
})