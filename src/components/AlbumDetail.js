import React from 'react';
import { View,
         Text } from 'react-native';

import Card from './Card';

export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      // Text tag being passed down as props to Card componenet
      <Card>
        <Text>{ this.props.album.title }</Text>
      </Card>
    );
  }
}
