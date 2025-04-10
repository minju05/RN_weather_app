import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import {
    StyleSheet, Text, View, ActivityIndicator,
    ScrollView, Dimensions, Image } from 'react-native';
import { GOOGLE_GEOCODING_API_KEY, WEATHER_API_KEY } from "@env";
import { weatherDescKo } from './weatherDescKo';

const myAPIKey = GOOGLE_GEOCODING_API_KEY;
const myAPIKey2 = WEATHER_API_KEY;
//import { Image } from 'react-native';
const WeatherDesc = ({day}) => {  // 일별 날씨를 입력받으면
    const rs = weatherDescKo.find((item) => { // 한글 날씨에서
        const id = day.weather[0].id; // 압력받은 날씨의 id와
        return Object.keys(item)[0] == id; // 동일한 id를 지닌 한글 반환
    });
    const descRs = rs ? Object.values(rs)[0] : 'No data exists'; // 반환받지 못했을 때 대비
    const iconId = day.weather[0].icon;
    const iconURL = rs ? (
        `https://openweathermap.org/img/wn/${iconId}@2x.png`)
        : 'No data exists';

    return (
        <>
            <Text style={styles.desc}>{descRs}</Text>
            <Image style={styles.icon} // width, height 없으면 화면에 안 보임
                   key={iconId} // Re-render 를 위해 구분
                   source={{ uri: iconURL }} />
        </>
    );
};


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
    const [dailyWeather, setDailyWeather] = useState([]);

    const locationData = async () => {
        const {granted} =
            await Location.requestForegroundPermissionsAsync();
        //console.log(granted);

        if (!granted) {
            setPermission(false);
            setErrorMsg('Permission to access location was denied');
            return;
        }

        const {coords: {latitude, longitude}} =
            await Location.getCurrentPositionAsync({accuracy: 5});
        //console.log(latitude);
        //console.log(longitude);

        // Expo Location 으로 역 주소 검색
        /*
        const address =
            await Location.reverseGeocodeAsync({latitude, longitude});
        console.log(address[0].district);
        const districtAddress = address[0].district;
        setDistrict(districtAddress);
         */

        const apiURL =
            `https://maps.googleapis.com/maps/api/geocode/` +
            `json?latlng=${latitude},${longitude}&language=ko&key=${myAPIKey}`

        const response = await fetch(apiURL);
        //console.log(response);
        const data = await response.json();
        //console.log(data);
        //console.log(data.results[7].address_components)

        const dataRs = data.results[7];
        const addressComponents = dataRs.address_components[0];
        const districtAddress = addressComponents.short_name;
        setDistrict(districtAddress);

        const apiURL2 =
            `https://api.openweathermap.org/data/3.0/onecall?` +
            `lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${myAPIKey2}` +
            `&units=metric`;
        const response2 = await fetch(apiURL2);
        const weatherData = await response2.json();
        //console.log(weatherData.daily);
        setDailyWeather(weatherData.daily);
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
                <Text style={styles.regDate}>4월 8일 (화) 5:00</Text>
            </View>
            <ScrollView pagingEnabled
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.weathers}>
                {dailyWeather.length === 0? (
                    <View style={{...styles.weatherCon, alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                ): (
                    dailyWeather.map((day, index) => (
                        <View key={index} style={styles.weatherCon}>
                            <View style={styles.day}>
                                <WeatherDesc day={day} />
                            </View>
                            <View style={styles.tempCon}>
                                <Text style={styles.temp}>
                                    {parseFloat(day.temp.day).toFixed(1)}
                                </Text>
                                <Text style={{
                                    fontSize: 90, position: 'absolute',
                                    top: 10, right: 30}}> ° </Text>
                            </View>
                        </View>
                    ))
                )}
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
        flex: 0.15,
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
    icon: {
      width: 60,
      height: 60,
      position: 'absolute',
      bottom: -20,
    },
    temp: {
        fontSize: 110,
    }
})

