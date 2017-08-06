import React from 'react';
import { View } from 'react-native';

export default class CardSelection {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <View></View>
    );
  }
}

const style = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
  }
});
