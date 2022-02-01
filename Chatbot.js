import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import db from './config';
import firebase from 'firebase';
import Result from './Result'
import { ThemeProvider } from 'styled-components';

class Chatbot extends Component {
  
update = () => {
          db.ref('/users/').set({
            age: this.state.age,
            name: this.state.name,
          })       
  }

  render() {
    const theme = {
  fontFamily: 'Helvetica Neue',

};
    return (
      <View>
      <ThemeProvider theme={theme}>
        <ChatBot
      headerTitle="Answer some questions"
  recognitionEnable={true}
  userAvatar= "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/4c74ef502d09663d2153fc49e1a5843a"
        steps={[
          {
            id: 'greeting',
            message: 'Welcome to Health App. Please enter some credentials so that we can optimise our app according to your health and provide best service.',
            trigger: 'ask name',
          },
          {
            id: 'ask name',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
              { value: 'female', label: 'Other', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            options: [
              {value: '11 & 12', label: '11 & 12', trigger: 'ask job'},
              {value: '13-18', label: '13-18', trigger: 'ask job'},
              {value: '18-60', label: '18-60', trigger: 'ask job'},
              {value: '60 and above', label: '60 and above', trigger: 'job'},
            ], 
          },
          {
            id: 'ask job',
            message: 'What kind of job do you have?',
            trigger: 'job',
          }, 
          {
            id: 'job',
            options: [
              {value: 'sititng', label: 'sititng', trigger: '7'},
              {value: 'non-sititng', label: 'non-sititng', trigger: '7'},
            ], 
          },        
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Result />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to modify any fields?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'true', label: 'Yes', trigger: 'update-yes' },
              { value: 'false', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
              { value: 'cancel', label: 'Cancel', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-name',
            message: 'Please enter your updated name',
            trigger: '7',
            update: 'name',
          },
          {
            id: 'update-gender',
            message: 'Please enter your updated gender',
            trigger: '7',
            update: 'gender'
          },
          {
            id: 'update-age',
            message: 'Please enter your updated age',
            trigger: '7',
            update: 'age',
          },
          {
            id: 'end-message',
            message: 'Thanks! Please click on the submit button below',
            end: true,
          },
        ]}
      />
      </ThemeProvider>

      <TouchableOpacity style={{
        width: 150,
        height: 30,
        backgroundColor: 'lightgrey',
        borderRadius: 30,
        alignItems: 'center',
        alignSelf: 'center', 
        marginTop: 10,
      }} onPress={() => {
        this.update();
      }}>
      <Text style={{
        fontSize: 20,      
      }}>Submit</Text></TouchableOpacity>
      </View>      
    );
  }
}

export default Chatbot; 