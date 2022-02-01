import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, AsyncStorage, ImageBackground} from 'react-native';

import RadioButtonAge from '../RadioButtons/RadioButtonAge';
import RadioButtonGender from '../RadioButtons/RadioButtonGender';
import RadioButtonJob from '../RadioButtons/RadioButtonJob';

import firebase from 'firebase';
import db from './config';

const PROPAGE = [
	{
		key: '11 & 12',
	},
	{
		key: '13-18',
	},
	{
		key: '18-60',
	},
  {
		key: '60 above',
	}
];

  const PROPGENDER = [
	{
		key: 'Male',
	},
	{
		key: 'Female',
	},
	{
		key: 'Other',
	}
];

const PROPJOB = [
	{
		key: 'Student',
	},
	{
		key: 'Employee, Teacher, Desktop Job / Sitting Job',
	},
  {
		key: 'Non - sitting',
	},
	{
		key: 'Other',
	}
];
export default class CredentialsScreen extends Component {

  submitCredentials = () => {
    if(this.props.getParams.ageEntered === true && this.props.getParams.genderEntered === true && this.props.getParams.jobEntered === true) {
      this.props.navigation.navigate("SignInScreen");
      var uid = firebase.auth().currentUser.uid;
      db.ref('/users/').set({
        age: this.props.getParams.valueAge,
        job: this.props.getParams.valueJob,
        gender: this.props.getParams.valueGender,
      })
    } else {
      alert("All credentials are not filled, please fill all the credentials before submitting.")
    }
  }

  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('./background.JPG')} style={{width: '100%', height: '100%', position: 'absolute', opacity: '80%'}} />
      <View style={styles.container}>
      <View></View>
      <View>
        <View style={styles.secondcontainer}>
        <View style={[styles.questionContainer, {backgroundColor: 'lightgrey', opacity: '90%'}]}>
          <Text style={styles.question}>1. Your age</Text>
        </View>
          <RadioButtonAge PROPAGE={PROPAGE} />
        </View>

        <View style={styles.secondcontainer}>
        <View style={[styles.questionContainer, {opacity: '95%'}]}>
          <Text style={[styles.question, {opacity: '100%',}]}>2. Your gender</Text>
        </View>
          <RadioButtonGender PROPGENDER={PROPGENDER} />
        </View>

        <View style={styles.secondcontainer}>
        <View style={[styles.questionContainer, {opacity: '95%'}]}>
          <Text  style={[styles.question, {opacity: '100%',}]}>3. Your job</Text>
        </View>
          <RadioButtonJob PROPJOB={PROPJOB} />
        </View>
        </View>
        <View>
          <TouchableOpacity style={styles.submit} onPress={() => {
            this.submitCredentials();
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '600',paddingTop: 10, paddingBottom: 15, alignSelf: 'center'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Chatbot style={{height: 200,}} />
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    opacity: '90%'
  },
  question: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  questionContainer: {
    paddingLeft: 10,
    marginBottom: 10,
    paddingBottom: 8,
    backgroundColor: 'lightgrey',
    zIndex: 20,
    opacity: '100%',
  },
  secondcontainer: {
    backgroundColor: '#ededed',
    zIndex: 0,
  },
  submit: {
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
  }
});
