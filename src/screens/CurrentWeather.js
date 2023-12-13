import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText'
import {weatherType} from '../util/weatherType'


const CurrentWeather = ({weatherData}) => {
  const { main:{temp, feels_like, temp_max, temp_min}, weather} = weatherData
  
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView style = {[styles.wrapper, {backgroundColor:weatherType[weatherCondition].backgroundColor}]}>
      <View style = {styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={styles.temp}>{`${temp}°`}</Text>
        <Text style= {styles.feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText msgOne={`High: ${temp_max}° / `} msgTwo={`Low: ${temp_min}°`} containerStyles={styles.highLowWrapper} msgOneStyles={styles.highLow} msgTwoStyles={styles.highLow}/>
      </View>

      <RowText msgOne={weather[0]?.description} msgTwo={weatherType[weatherCondition]?.message} containerStyles={styles.bodyWrapper} msgOneStyles={styles.desc} msgTwoStyles={styles.msg}/>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  temp: {
    color: 'black',
    fontSize: 48
  },

  feels: {
    color: 'black',
    fontSize: 30
  }, 

  highLow: {
    color: 'black',
    fontSize: 20
  },

  highLowWrapper: {
    flexDirection: 'row'
  },

  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 15,
    marginBottom: 30
  },

  desc: {
    fontSize: 35
  },
  msg: {
    fontSize: 25
  }

  
})

export default CurrentWeather
