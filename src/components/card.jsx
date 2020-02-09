import React from 'react'
import '../styles/card.css'
import { FaLeaf } from 'react-icons/fa'
import Popup from './popup'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showpopup: false
        }
    }
    toogleShowpopup() {
        this.setState((state) => {
            return { showpopup: !state.showpopup }
        })
    }
    render() {
        let color = 'black';

        if (this.props.product.envScore < 5) {
            color = 'red';
        }
        else if (this.props.product.envScore < 8 && this.props.product.envScore >= 5) {
            color = 'blue';
        } else {
            color = 'green';
        }
        return (
            <>
            {
                this.state.showpopup?<Popup product={this.props.product} click={this.toogleShowpopup.bind(this)} color={color}/>:null
            }
            <div className="card" onClick={() => {this.toogleShowpopup() }}>
                <img src={this.props.product.imageUrl} alt={this.props.product.productName} className="card-img" />
                <span className="card-title">{this.props.product.productName}</span>
                <div className="card-content">
                    <div className="price">
                        &#8377;<span>{this.props.product.productPrice}</span>
                    </div>
                    <div className="e-friendly ">
                        <span className={"number " + color}>{Math.floor(this.props.product.envScore)}</span>
                        <div className="label">
                            <FaLeaf className="leaf-icon" />
                            eco-friendly index
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Card;