import React from 'react'
import {View, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'

const RowText = ({msgOne, msgTwo, containerStyles, msgOneStyles, msgTwoStyles}) => {
  return (
    <View style= {containerStyles}>
        <Text style= {msgOneStyles}>{msgOne}</Text>
        <Text style= {msgTwoStyles}>{msgTwo}</Text>
    </View>
  )
}

export default RowText
