import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// 12강 PPT [FlexBox] //
/*
export default function App() {
    return (
        <View style={ flexDirection: 'row'}>
            <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
            <View style={{width: 100, height: 100, backgroundColor: 'darkorange'}}></View>
            <View style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
            <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
            <View style={{width: 100, height: 100, backgroundColor: 'darkorange'}}></View>
            <View style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
            <StatusBar style="auto" />
        </View>
    );
}
*/

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{flex: 1, backgroundColor: 'red'}}></View>
            <View style={{flex: 1, backgroundColor: 'darkorange'}}></View>
            <View style={{flex: 1, backgroundColor: 'green'}}></View>
            <View style={{flex: 2, backgroundColor: 'red'}}></View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
});
