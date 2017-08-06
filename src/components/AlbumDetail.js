import React from 'react';
import { View,
         Image,
         StyleSheet,
         Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, artist, thumbnail_image } = this.props.album;

    return (
      // Text tag being passed down as props to Card componenet
      <Card>
        <CardSection>
        <View>
          <Image source={ { uri: thumbnail_image } } style={ styles.thumbnailStyle }/>
        </View>
        <View style={ styles.headerContentStyle }>
          <Text>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  }
});
