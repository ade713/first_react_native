import React from 'react';
import { StyleSheet,
         View } from 'react-native';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      // this.props.children accepts all the props (Text tag) passed down to AlbumDetail
      <View style={ styles.cardContainerStyle }>
      { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
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
