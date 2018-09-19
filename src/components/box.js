import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <div className="box-container">
        <div className="box">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <line className="top" x1="0" y1="0" x2="900" y2="0"/>
            <line className="left" x1="0" y1="460" x2="0" y2="-920"/>
            <line className="bottom" x1="300" y1="460" x2="-600" y2="460"/>
            <line className="right" x1="300" y1="0" x2="300" y2="1380"/>
          </svg>
          <h3>D</h3>
          <span>2012</span>
          <span>Broccoli, Asparagus, Curry</span>
        </div>

        <div className="box2">
          <svg xmlns="http://W3.org/2000/svg" width="100%" height="100%">
            <line className="top2" x1="0" y1="0" x2="3000" y2="0" />
            <line className="left2" x1="0" y1="500" x2="0" y2="-1000" />
            <line className="bottom2" x1="1000" y1="500" x2="-2000" y2="500" />
            <line className="right2" x1="1000" y1="0" x2="1000" y2="1500" />
          </svg>
          
          <span>2018</span>
          <span>Matthew John Werdean</span>
        </div>

      </div>
    )
  }
}
