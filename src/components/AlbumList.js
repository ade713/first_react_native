import React from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
  constructor() {
    super();

    this.state = {
      albums: []
    };
  }


  componentWillMount() {
    //AJAX request via axios
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({
        albums: response.data
      }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={ album.title } album={ album } />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}