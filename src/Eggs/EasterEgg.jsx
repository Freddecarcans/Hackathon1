import React, { Component } from 'react';
import './EasterEgg.css'

class EasterEgg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      displayDiv: false,
    }
  }
  onClickPiece = () => {
    this.setState({
      display: false,
      displayDiv: true,
    });
    
  }
  render() {
    return (
      <div className="EasterEgg">
        <div className={`easter-egg ${this.state.displayDiv ? "affiche-on" : "affiche-off"}`}>
          <div >
            <img className="easterImage" src="images/easterEgg.png" alt="easterEgg"/>
            {this.state.displayDiv ? <audio src='./sons/cloches.mp3' autoPlay preload></audio>: ""}
          </div>
        </div>
        <div>
          <a href="#" className={`golden-egg ${this.state.display ? "affiche-on" : "affiche-off"}`}
            onClick={this.onClickPiece}
            style={{ left: `${this.props.egg.coordX}vw`, top: `${this.props.egg.coordY}vw` }}

          >
            <img src={this.props.egg.img} alt="" style={{width:"6vw"}}/>
          </a>
        </div>
      </div>
    )
  }
}

export default EasterEgg;