import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// 9강 PPT [React Native: No tags] //

export default function App() {
    return (
        <View style={styles.container}>
            {<Text style={{ fontSize: 50 }}>리액트 네이티브</Text>}
            <span>리액트 네이티브</span>
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
});


// 9강 PPT [React Native: No Shorthand Style] //
/*
export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>리액트 네이티브</Text>
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
        // border: "1px solid red" //
        borderWidth: 10,
        borderColor: "red",
    },
});
*/

// 9강 PPT [React Native: No Inherit Style] //
/*
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>리액트 네이티브</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        color: 'red',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {},
});
*/

// 9강 PPT [React Native: Spread Syntax] //
/*
export default function App() {
    return (
        <View style={ styles.container }>
            <Text style={{ ...styles.container, color: 'blue' }}>리액트 네이티브</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        fontSize: 50,
        color: 'red',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
*/

// 9강 PPT [React Native: No StyleSheet ver.] //
/*
export default function App() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 50,
                fontWeight: 'bold'}}>리액트 네이티브</Text>
            <StatusBar style="auto" />
        </View>
    );
}
*/

// 9강 PPT [참고. StatusBar 유무 차이] //
/*
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50 }}>리액트 네이티브</Text>
            <StatusBar style="auto" />
        </View>
    );
}
*/

