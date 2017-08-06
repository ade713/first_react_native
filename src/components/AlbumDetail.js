import React from 'react';
import { View,
         Image,
         Linking,
         StyleSheet,
         Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class AlbumDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album;
    const { thumbnailStyle,
            thumbnailContainerStyle,
            imageStyle,
            headerTextStyle,
            headerContentStyle } = styles; // destructuring to styles to keep code clean

    return (
      // Text tag being passed down as props to Card componenet
      <Card>
        <CardSection>
        <View style={ thumbnailContainerStyle }>
          <Image source={ { uri: thumbnail_image } } style={ thumbnailStyle }/>
        </View>
        <View style={ headerContentStyle }>
          <Text style={ headerTextStyle }>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
        </CardSection>

        <CardSection>
          <Image style={ imageStyle }source={ { uri: image } } />
        </CardSection>

        <CardSection>
          <Button onPress={ () => Linking.openURL(url) } >
            Buy Now
          </Button>
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

  headerTextStyle: {
    fontSize: 18,
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});
