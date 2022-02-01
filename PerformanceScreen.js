import React, { Component, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, SafeAreaView, Platform, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Chart  from "react-google-charts";

export const dataSleep = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 5],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const dataBreakfast = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 5],
  ["Watch TV", 2],
  ["Sleep", 1],
];

export const dataLunch = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 5],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const dataDinner = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 5],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  is3D: true,
};

export default class PerformanceScreen extends Component {

  constructor() {
    super();
    this.state={
      hoursOfSleep: '8 (example)',
      sleepStatus: 'good (example)',
      breakfastStatus: '',
      breakfastOriginalTime: '',
      lunchStatus: '',
      lunchOriginalTime: '',
      dinnerStatus: '',
      dinnerOriginalTime: '',
    }
  }
  render() {
    return(
      <View>
      <View style={{flex: 1, backgroundColor: '#15193c',}}>
        <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('./button_img_1.jpg')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Performance</Text>
            </View>
          </View>
      </View>
      
      <View>

        <View style={{marginBottom: RFValue(20)}}>
          <View style={styles.containerView}>
            <Text style={styles.textPerformance}>Your sleep status for this month:</Text>
          </View>

          <View style={styles.containerView}>
            <Chart
      chartType="PieChart"
      data={dataSleep}
      options={options}
      width={'95%'}
    />

    <Text>Average Hours: {this.state.hoursOfSleep}</Text>
    <Text>Status: {this.state.sleepStatus}</Text>
          </View>
        </View>

        <View style={{marginBottom: RFValue(20)}}>
          <View style={styles.containerView}>
            <Text style={styles.textPerformance}>Your breakfast timings for this month:</Text>
          </View>

          <View style={styles.containerView}>
            <Chart
      chartType="PieChart"
      data={dataBreakfast}
      options={options}
      width={'95%'}
    />

    <Text>Original time set: {this.state.breakfastOriginalTime}</Text>
    <Text>Status: {this.state.breakfastStatus}</Text>
          </View>
        </View>

        <View style={{marginBottom: RFValue(20)}}>
          <View style={styles.containerView}>
            <Text style={styles.textPerformance}>Your lunch timings for this month:</Text>
          </View>

          <View style={styles.containerView}>
            <Chart
      chartType="PieChart"
      data={dataLunch}
      options={options}
      width={'95%'}
    />

    <Text>Original time set: {this.state.lunchOriginalTime}</Text>
    <Text>Status: {this.state.lunchStatus}</Text>
          </View>
        </View>

        <View style={{marginBottom: RFValue(20)}}>
          <View style={styles.containerView}>
            <Text style={styles.textPerformance}>Your dinner timings for this month:</Text>
          </View>

          <View style={styles.containerView}>
            <Chart
      chartType="PieChart"
      data={dataDinner}
      options={options}
      width={'95%'}
    />

    <Text>Original time set: {this.state.dinnerOriginalTime}</Text>
    <Text>Status: {this.state.dinnerStatus}</Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    flex: 0.9,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  containerView: {
    borderColor: 'lightgrey',
    borderWidth: RFValue(2.5),
    paddingBottom: RFValue(5),
    paddingTom: RFValue(5),
    alignItems: 'center',
    marginTop: RFValue(5),
    width: '95%',
    alignSelf: 'center',
  },
  textPerformance: {
    fontSize: RFValue(18),
    textAlign: 'center',  }
});