import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2;
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
        />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  //const { username } = state.user; // { user: { username: "bob"}}

  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
