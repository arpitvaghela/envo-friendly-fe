import React from 'react'
import '../styles/popup.css'
import { FaTimes } from 'react-icons/fa'

class Popup extends React.Component {
    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <FaTimes className="close-icon" onClick={() => { this.props.click() }} />
                    <div className="content">
                        <img src={this.props.card.image} alt="" />
                        <div className="container">
                            <h3 className="popup-name">{this.props.card.name}</h3>
                            <div className="popup-text">
                                <div className="about">
                                    <h3>About</h3>
                                    {this.props.card.aboutus}
                                </div>
                                <div className="price">
                                    &#8377;<span>{this.props.card.price}</span>
                                </div>
                                <div className="e-friendly">
                                    <span className={"number " + this.props.color}>{this.props.card.e_index}</span>
                                    <div className="label">
                                        eco-friendly index
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup;