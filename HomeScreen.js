import React, { Component, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, SafeAreaView, Platform, StatusBar} from 'react-native';
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize';

export default class HomeScreen extends Component {
  constructor() {
    super();
        var quotes = ['Health is not valued till sickness comes.', 'The greatest health is wealth', 'Health is the greatest position', 'A healthy outside starts from inside']
        var number = Math.floor(Math.random() * 4) + 0;
        var quote = quotes[number];
    this.state={
      quote: quote,
    }
  }

  render() {
    return(

      <View style={{width: '100%', height: '100%'}}>
        <ImageBackground source={require('../RegisterScreens/background.JPG')} style={{width: 333, height: '108.4%', position: 'absolute', opacity: '10%', resizeMode: 'cover'}} />

        <View style={{flex: 1, backgroundColor: '#15193c',}}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('./homelogo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Home</Text>
            </View>
          </View>
      </View>

        <View>
          <Image style={{
            alignSelf: 'left',
            width: RFValue(75),
            height: RFValue(75),
            marginTop: RFValue(50),
            borderRadius: RFValue(50),
            alignSelf: 'center'
          }}
           source={require('./download.jfif')} />
          <Text style={styles.mainText}>{`Welcome to Health\nApp!`}</Text>
        </View>
        <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttons}>
            <Image style={styles.buttonImage} source={require('./button_img_1.jpg')} />
            <Text style={styles.buttonText}>Performance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}>
          <View style={styles.buttonImage}></View>
            <Image style={{
              height: RFValue(85),
    width: RFValue(85),
    borderRadius: RFValue(15),
    marginLeft: RFValue(25),
    marginTop: RFValue(-90),
    backgroundColor: 'white',
            }} source={require('./button_img_2.png')} />
            <Text style={[styles.buttonText, {marginLeft: RFValue(33), marginTop: RFValue(5)}]}>Settings</Text>
          </TouchableOpacity>
        </View>

          
        </View>
        <View>
          <Image style={{
            width: RFValue(120),
            height: RFValue(50),
            marginTop: RFValue(50),
            marginLeft: RFValue(90),
          }} source={require('./quote.png')} />

          <Text style={[styles.mainText, {textAlign: 'center', marginTop: RFValue(20), lineHeight: 45, fontSize: 30}]}>{this.state.quote}</Text>
        </View>
        
      </View>

    )
  }
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 25,
    fontWeight: '500',
    paddingLeft: 5,
    lineHeight: 30,
    fontFamily: 'calibri',
    color: 'black',
    opacity: '100%',
    textAlign: 'center'
  },
  buttons: {
    marginTop: RFValue(10),
    marginLeft: RFValue(10),
    backgroundColor: '#b0afac',
    width: RFValue(125),
    height: RFValue(125),
    borderRadius: RFValue(20)
  },
  buttonImage: {
    height: RFValue(95),
    width: RFValue(115),
    borderRadius: RFValue(15),
    marginLeft: RFValue(5),
    marginTop: RFValue(5),
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    marginLeft: RFValue(12),
    marginTop: RFValue(2),
    fontWeight: '500',
    color: 'whitesmoke',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: RFValue(40),
    height: RFValue(40),
    resizeMode: 'contain',
    borderRadius: RFValue(7),
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
})