import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Button, ScrollView, Dimensions } from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
// console.log(SCREEN_WIDTH, SCREEN_HEIGHT);

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [permission, setPermission] = useState(true);
    const [district, setDistrict] = useState(null);

    const locationData = async () => {
        const { granted } =
            await Location.requestForegroundPermissionsAsync();
        console.log(granted);

        if (!granted) {
            setPermission(false);
            setErrorMsg('Permission to access location was denied');
            return;
        }

        const {coords: {latitude, longitude}} =
            await Location.getCurrentPositionAsync({accuracy: 5});
        console.log(latitude);
        console.log(longitude);

        const address =
            await Location.reverseGeocodeAsync({latitude, longitude});
        console.log(address[0].district);
        const districtAddress = address[0].district;
        setDistrict(districtAddress);
    }

    useEffect(() => {
        locationData()
    }, []);

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <View style={styles.cityCon}>
                <Text style={styles.city}>{district}</Text>
            </View>
            <View style={styles.regDateCon}>
                <Text style={styles.regDate}>April 8, Tues., 5:00</Text>
            </View>
            <ScrollView pagingEnabled
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} // 숨김
                        contentContainerStyle={styles.weathers}>
                <View style={styles.weatherCon}>
                    <View style={styles.day}>
                        <Text style={styles.desc}>Sunny</Text>
                    </View>
                    <View style={styles.tempCon}>
                        <Text style={styles.temp}>13</Text>
                    </View>
                </View>
                <View style={styles.weatherCon}>
                    <View style={styles.day}>
                        <Text style={styles.desc}>Sunny</Text>
                    </View>
                    <View style={styles.tempCon}>
                        <Text style={styles.temp}>13</Text>
                    </View>
                </View>
                <View style={styles.weatherCon}>
                    <View style={styles.day}>
                        <Text style={styles.desc}>Sunny</Text>
                    </View>
                    <View style={styles.tempCon}>
                        <Text style={styles.temp}>13</Text>
                    </View>
                </View>
                <View style={styles.weatherCon}>
                    <View style={styles.day}>
                        <Text style={styles.desc}>Sunny</Text>
                    </View>
                    <View style={styles.tempCon}>
                        <Text style={styles.temp}>13</Text>
                    </View>
                </View>
                <View style={styles.weatherCon}>
                    <View style={styles.day}>
                        <Text style={styles.desc}>Sunny</Text>
                    </View>
                    <View style={styles.tempCon}>
                        <Text style={styles.temp}>13</Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe01a',
    },
    cityCon: {
        //flex: 1,
        height: SCREEN_HEIGHT * 0.25,
    },
    regDateCon: {
        alignItems: 'center',
    },
    weathers: {
        //backgroundColor: 'pink',
    },
    weatherCon: {
        //flex: 3,
        width: SCREEN_WIDTH,
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

