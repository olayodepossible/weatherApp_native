import React from 'react'
import {SafeAreaView,View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({weatherData}) => {
    const {name, country, population, sunrise, sunset} = weatherData
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/city_backgrnd.jpg')} style={styles.imageLayout}>
            <Text style={[styles.cityName, styles.cityText]}>{name} ({country})</Text>
            <View style={[styles.populationWrapper, styles.rowLayout]}>
                <IconText iconName={'user'} iconColor={'red'} textBody={`Population: ${population}`} textBodyStyle= {styles.populationText}/>
            </View>
            <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                <IconText iconName={'sunrise'} iconColor={'white'} textBody={moment(sunrise).format('h:mm:ss a')} textBodyStyle= {styles.riseSetText}/>
                <IconText iconName={'sunset'} iconColor={'white'} textBody={moment(sunset).format('h:mm:ss a')} textBodyStyle= {styles.riseSetText}/>
            </View>
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

    imageLayout: {
        flex: 1
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    },
    populationWrapper:{
        justifyContent: 'center',
        marginTop: 30
    },

    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },

    riseSetText:{
        fontSize: 20,
        color: 'white',
    },

    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center',
    }
    

})

export default City
