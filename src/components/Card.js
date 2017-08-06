import React from 'react';
import { StyleSheet,
         View } from 'react-native';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={ styles.cardStyle }>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadow: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5, //space between screen edge
    marginRight: 5,
    marginTop: 10,
  },
});
