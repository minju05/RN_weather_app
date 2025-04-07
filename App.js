import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// 8강 PPT [App.js: 기본 UI] //
/*
export default function App() {
return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

// 8강 PPT [숫자 구현] //
/*
export default function App() {
  const [number, setNumber] = useState(0);

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>결과: {number} </Text>
        <StatusBar style="auto" />
      </View>
  );
}
*/

// 8강 PPT [버튼 구현] //
/*
export default function App() {
  const [number, setNumber] = useState(0);

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>결과: {number} </Text>
        <View style={{ flexDirection: 'row', gap: 50 }}>
          <Button title="증가" />
          <Button title="감소" />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}
*/

// 8강 PPT [숫자 증감 구현] //

export default function App() {
  const [number, setNumber] = useState(0);

  return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>결과: {number} </Text>
        <View style={{ flexDirection: 'row', gap: 50 }}>
          <Button title="증가" onPress={() => setNumber(number + 1)} />
          <Button title="감소" onPress={() => setNumber(number - 1)} />
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
});
