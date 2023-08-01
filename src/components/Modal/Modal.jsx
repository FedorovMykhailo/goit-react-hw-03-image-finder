import React, { Component } from "react";

class Modal extends Component {

    
    componentDidMount() {
        document.addEventListener("keydown",this.handleModalClose )
    }
    
    componentWillUnmount (){
        document.addEventListener("keydown",this.handleModalClose)
    }

    handleModalClose  = (evt) => {
        if (evt.code === "Escape") { this.props.clickOverlay() }
    }

    render() {
        const {img, desc, clickOverlay} = this.props
        return  <div className="Overlay" onClick={clickOverlay} >
                    <div className="Modal">
                        <img src={img} alt={desc} />
                    </div>
                </div>
    }
}

export default Modal