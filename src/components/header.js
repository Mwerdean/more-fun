import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="header-left">
                <ul className="header-show">
                    <li>First
                        <ul className="header-has-children">
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="header-show">
                    <li>Second
                        <ul className="header-has-children">
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                            <li><a>Item 1</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <img src="https://s3-us-west-1.amazonaws.com/thene/mw1.jpg" alt="logo" className="header-logo" />
            <div className="header-right">
                <a>About</a>
                <a>Third</a>
            </div>
        </nav>
      </div>
    )
  }
}
