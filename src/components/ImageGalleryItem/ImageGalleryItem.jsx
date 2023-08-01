import React, { Component } from "react";

class ImageGaleryItem extends Component {
    render() {
        const {image, alt, onClick } = this.props;
        return  <>
                    <li className="ImageGalleryItem">
                        <img className="ImageGalleryItem-image" src={image} alt={alt} onClick={onClick} />
                    </li>
                </>
    }
}

export default ImageGaleryItem