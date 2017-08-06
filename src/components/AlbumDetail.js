import React from 'react';
import { View,
         Text } from 'react-native';

export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <View>
        <Text>{ this.props.album.title }</Text>
      </View>
    );
  }
}
