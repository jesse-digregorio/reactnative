import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
      const { name, phone, shift } = this.props;

      this.props.employeeCreate({ name, phone, shift: shift || 'Lunedi' });
  }

  render() {
    console.log(this.props.employee);
    
    return (
      <Card>
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }

} // class EmployeeCreate

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
