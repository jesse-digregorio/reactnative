import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  // according the the instructor, this is a little "dishonest".
  // according to him, we don't really want or need to return anything form here,
  // but he wrapped it in a function to satisfy 'redux-thunk' requirement.
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE })
        Actions.pop());
      };
  };
};
// problem with .then(() => Actions.employeeList());
// is that it puts us "back" on employee list, but not really.
// It really puts "employeeList" on the 'Scene Stack', putting us
// in the position of having a 'back arrow' to the Employee Create screen.
// That's no good.
// two solutions to this:
//    use: .then(() => Actions.employeeList({ type: 'reset' }));
// or
//    a pop-up suggested: Actions.pop()
