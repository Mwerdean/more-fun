import React, { Component } from 'react'
import bird from '../assets/bird.png'
import layer1 from '../assets/Layer1.png'
import layer2 from '../assets/Layer2.png'
import layer3 from '../assets/Layer3.png'
import layer4 from '../assets/Layer4.png'
import sky from '../assets/sky2.png'
import name from '../assets/name.png'

export default class Hero extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        var wScroll = 
        console.log(wScroll)
    }

  render() {
    return (
        <div>
            <div className="hero-container">
                <div className= "parallax hero-name">
                    <img src = {name} alt = "name" />
                </div>
                <div className= "parallax hero-sky">
                    <img src = {sky} alt = "sky" />
                </div>
                <div className="parallax hero-bird">
                    <img src = {bird} alt = "bird" />
                </div>
                <div className="parallax hero-layer1">
                    <img src = {layer1} alt = "layer1" />
                </div>
                <div className="parallax hero-layer2">
                    <img src = {layer2} alt = "layer2" />
                </div>
                <div className="parallax hero-layer3">
                    <img src = {layer3} alt = "layer3" />
                </div>
                <div className="parallax hero-layer4">
                    <img src = {layer4} alt = "layer4" />
                </div>
            </div>
            <div className="testbox"></div>
            <div className="testbox"></div>
      </div>
    )
  }
}
