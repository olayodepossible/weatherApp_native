import React from 'react'
import {SafeAreaView,View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({iconName, iconColor, textBody, textBodyStyle}) => {
  return (
    <View style={styles.container}>
        <Feather name={iconName} size={50} color={iconColor} />
        <Text style={[styles.textTheme, textBodyStyle]}>{textBody}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})

export default IconText
