import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render () {
    console.log(this.props);
    return;// <View></View>
  }
}

const mapStateToProps = state => {
  //console.log(state);
  //const { username } = state.user; // { user: { username: "bob"}}

  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
