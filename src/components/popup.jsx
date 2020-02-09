import React from 'react'
import '../styles/popup.css'
import { FaTimes } from 'react-icons/fa'
import Button from '@material-ui/core/Button'
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showconfirm: false
        }
        this.toogleConfirm.bind(this);
        this.onConfirm.bind(this);
    }
    toogleConfirm() {
        this.setState((state) => { return { showconfirm: !state.showconfirm } })
    }
    onConfirm(){

    }
    render() {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <FaTimes className="close-icon" onClick={() => { this.props.click() }} />
                    <div className="popup-content">
                        <img src={this.props.product.imageUrl} alt="" />
                        <div className="popup-container">
                            <h3 className="popup-name">{this.props.product.productName}</h3>
                            <div className="popup-text">
                                <div className="about">
                                    <h3>About</h3>
                                    {this.props.product.productAbout}
                                </div>
                                <div className="ing">
                                    <h3>Ingredients</h3>
                                    {this.props.product.productIngredients}
                                </div>
                                <div className="price">
                                    &#8377;<span>{this.props.product.productPrice}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="e-friendly">
                        <span className={"number " + this.props.color}>{Math.floor(this.props.product.envScore)}</span>
                        <div className="label">
                            eco-friendly index
                                </div>
                    </div>
                    <Button variant="outlined" color="green"  onClick={()=>{this.toogleConfirm()}}>
                        Buy Now
                    </Button>

                    {
                        this.state.showconfirm ? <Button variant="solid" color="red" onClick={()=>{this.onConfirm()}}>Confirm</Button> : null
                    }
                </div>


            </div>
        )
    }
}

export default Popup;