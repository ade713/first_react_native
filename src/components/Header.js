// import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={ viewStyle }>
        <Text style={ textStyle }>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
  //styling uses flexbox already
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    // add shadow to header
    shadowColor: '#000',
    shadowOffset: {
      width:0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },

  textStyle: {
    fontSize: 30,
  },
};


// Cleaner weay to create styling in React Native
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//
//   write: {
//     color: 'yellow',
//     fontSize:  40,
//   },
// });
