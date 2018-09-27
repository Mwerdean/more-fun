import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props),
        this.state = {
            menuShow: false
        }
        this.myRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        if(event.path[1].scrollY >= 800) {
            this.setState({ menuShow: true })
        } else {
            this.setState({ menuShow: false })
        }
    }

  render() {
    return (
      <div>
        <nav className={`navNoShow ${this.state.menuShow ? 'navShow' : ''}`}>
            <div className="header-left" >
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
                <ul className="header-show twentpx"></ul>
            </div>
            <img src="https://s3-us-west-1.amazonaws.com/thene/mw1.jpg" alt="logo" className="header-logo" />
            <div>
                <a>About</a>
                <a>Third</a>
            </div>
        </nav>
      </div>
    )
  }
}
