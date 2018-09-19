import React, { Component } from 'react'

export default class Hero2 extends Component {
    constructor(props) {
        super(props),
        this.state = {
            transform: (0, 0)
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.path[1].scrollY,
        itemTranslate = ( scrollTop/2 + 'px');

    this.setState({
      transform: itemTranslate
    });
    }

  render() {
    return (
      <div>

        <header className = "hero-box">
            <div className = "name" style = {{transform: `translate(0, ${this.state.transform})`}}></div>
            <div className = "fore-bird"></div>
            <div className = "layer1"></div>
            <div className = "layer2"></div>
            <div className = "layer3"></div>
            <div className = "layer4"></div>
        </header>

        <section className = "content">
            <article>
                <h1>Matthew Werdean</h1>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </article>
        </section>
        <div style={{height: 2000}}></div>
      </div>
    )
  }
}
