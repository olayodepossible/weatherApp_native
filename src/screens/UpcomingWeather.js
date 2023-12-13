import React from 'react'
import {SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground} from 'react-native'
import FutureWeather from '../components/FutureWeather'

const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
        <FutureWeather dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} condition={item.weather[0].main}/>
    )
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/thunderstorm_cloud.jpg')} style={styles.image}>
            <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item) => item.dt_txt}/>
        </ImageBackground>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1,
    },
})
export default UpcomingWeather
