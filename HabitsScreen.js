import React, {useState} from 'react';
import {View, TouchableOpacity, Platform, StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import DateTimePicker from '@react-native-community/datetimepicker';

export const HabitsScreen = () => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  var sleepStartStatus = 'not-entered'
    var sleepEndStatus = 'not-entered'
     var breakfastTime = 'not-entered'
      var lunchTime = 'not-entered'
       var dinnerTime = 'not-entered'

  return (
    <View>
      <View style={styles.containerView}>
      <Text style={styles.textPerformance} onPress={this.showTimepicker}>Select Sleep Time</Text>
      <Text style={{textAlign: 'center', fontSize: RFValue(15)}}>Status: {sleepStartStatus}</Text>
      </View>

      <View style={styles.containerView}>
      <Text style={styles.textPerformance} onPress={this.showTimepicker}>Select Wake Up Time</Text>
      <Text style={{textAlign: 'center', fontSize: RFValue(15)}}>Status: {sleepEndStatus}</Text>
      </View>

      <View style={styles.containerView}>
      <Text style={styles.textPerformance} onPress={this.showTimepicker}>Select Breakfast Time</Text>
      <Text style={{textAlign: 'center', fontSize: RFValue(15)}}>Status: {breakfastTime}</Text>
      </View>

      <View style={styles.containerView}>
      <Text style={styles.textPerformance} onPress={this.showTimepicker}>Select Lunch Time</Text>
      <Text style={{textAlign: 'center', fontSize: RFValue(15)}}>Status: {lunchTime}</Text>
      </View>

      <View style={styles.containerView}>
      <Text style={styles.textPerformance} onPress={this.showTimepicker}>Select Dinner Time</Text>
      <Text style={{textAlign: 'center', fontSize: RFValue(15)}}>Status: {dinnerTime}</Text>
      </View>

      <TouchableOpacity style={{backgroundColor: 'black', paddingBottom: RFValue(5), paddingTop: RFValue(5), width: '35%', alignSelf: 'center' }}><Text style={{color: 'white', textAlign: 'center', fontSize: RFValue(17), fontWeight: '500' }}>Submit</Text></TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
   containerView: {
    borderColor: 'lightgrey',
    borderWidth: RFValue(2.5),
    paddingBottom: RFValue(5),
    paddingTom: RFValue(5),
    paddingLeft: RFValue(5),
    marginTop: RFValue(5),
    width: '95%',
    alignSelf: 'center',
    marginBottom: RFValue(15)
  },

  textPerformance: {
    fontSize: RFValue(18),
    textAlign: 'center', 
    color: '#6315c2',
    cursor: 'pointer' }
})
