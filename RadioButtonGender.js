import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native';

export default class RadioButtonGender extends Component {
  constructor(props) {
    super(props);
    this.state={      
		valuegender: null,
    genderEntered: false,
    }
  }

	render() {
		const { PROPGENDER } = this.props;
		const { valuegender } = this.state;

		return (
			<View>
				{PROPGENDER.map(res => {
					return (
						<View key={res.key} style={styles.container}>
            
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										valuegender: res.key,
                        genderEntered: true
									});
                  AsyncStorage.setItem('genderEntered', 'true')
							}}>{valuegender === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
              <Text style={styles.radioText}>{res.key}</Text>
						</View>
					);
				})}
            
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'left',
        flexDirection: 'row',
		justifyContent: 'left',
	},
    radioText: {
        marginRight: 35,
        fontSize: 17,
        color: 'grey',
        fontWeight: '800',
        marginLeft: 10,
        marginTop: -2,
    },
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 3,
		borderColor: 'grey',
		alignItems: 'center',
		justifyContent: 'center',
    marginLeft: 21,
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: 'grey',
    },
});