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

        if (this.props.card.e_index < 5) {
            color = 'red';
        }
        else if (this.props.card.e_index < 8 && this.props.card.e_index >= 5) {
            color = 'blue';
        } else {
            color = 'green';
        }
        return (
            <>
            {
                this.state.showpopup?<Popup card={this.props.card} click={this.toogleShowpopup.bind(this)} color={color}/>:null
            }
            <div className="card" onClick={() => {this.toogleShowpopup() }}>
                <img src={this.props.card.image} alt={this.props.card.name} className="card-img" />
                <h3 className="card-title">{this.props.card.name}</h3>
                <div className="card-content">
                    <div className="price">
                        &#8377;<span>{this.props.card.price}</span>
                    </div>
                    <div className="e-friendly ">
                        <span className={"number " + color}>{this.props.card.e_index}</span>
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