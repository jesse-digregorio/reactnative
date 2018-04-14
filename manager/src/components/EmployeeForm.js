import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

  render() {
    return(
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane Doe"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
             />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
            />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={ day => this.props.employeeUpdate({ prop: 'shift', value: day }) }
          >
            <Picker.Item label="Lunedi" value="Lunedi" />
            <Picker.Item label="Martedi" value="Martedi" />
            <Picker.Item label="Mercoledi" value="Mercoledi" />
            <Picker.Item label="Jovedi" value="Jovedi" />
            <Picker.Item label="Venerdi" value="Venerdi" />
            <Picker.Item label="Sabado" value="Sabado" />
            <Picker.Item label="Domenica" value="Domenica" />
          </Picker>
        </CardSection>
      </View>
    );

  }
} // class employeeForm

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
