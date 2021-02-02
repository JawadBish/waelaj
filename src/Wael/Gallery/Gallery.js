
import React, { Component } from 'react';
import ImageSlider from '../Gallery/ImageSlider';

import { Gallery1 , Gallery2 , defaultImage } from '../Gallery/ImagesData';

class Gallery extends Component {
  state = {
    selectedGallery : []
  }

  componentDidMount() {
    this.setState({ selectedGallery: defaultImage });
}
 
  handleSelectorCollectionAlbum( collection) {
    this.setState({selectedGallery : collection})
  }

  render() {
    return (
    <div className="wrapper-image-gallery">
      <div className="buttons-gallery-selector">
      <button onClick = {() => (this.handleSelectorCollectionAlbum(Gallery1))}> Portraits وجوه</button>
      <button onClick = {() => (this.handleSelectorCollectionAlbum(Gallery2))}>توت ارض بحيفا</button>
      </div>
      <ImageSlider slides={this.state.selectedGallery} />
    </div>
  );
  }
};

export default Gallery;
