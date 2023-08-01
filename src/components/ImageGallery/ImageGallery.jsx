import React, { Component } from "react";
import ImageGaleryItem from '../ImageGalleryItem/ImageGalleryItem'

class ImageGalery extends Component {
    render() {
        const { galeryItems, onModalClick} = this.props;
        const gal = galeryItems.map((item) => {
            return <ImageGaleryItem
                key={item.id}
                image={item.largeImageURL}
                alt={item.tags}
                onClick = {onModalClick}
            ></ImageGaleryItem>
        })
        return  <>
                    <ul className="ImageGallery">
                        {gal}
                    </ul>
                </>
    }
}


export default ImageGalery