import React, { Component } from "react";

class Button extends Component {
    render() {
        const {clickLoadMore } = this.props;
        return  <>
                    <button className="Button" onClick={clickLoadMore}> Load More ...</button>
                </>
    }
}

export default Button