import React, { Component } from 'react'
import namegif from '../assets/namegif4.gif'
import backgif from '../assets/cyberpunkglow.gif'

export default class Cyberpunk extends Component {
    constructor(props) {
        super(props),
        this.state = {
            transform: (0, 0),
            transform2: (0, 0),
            menuShow: false,
            loadin: false,
        }
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.setState({ loadin: true })
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.path[1].scrollY,
        itemTranslate = ( scrollTop/2 + 'px');
        if(event.path[1].scrollY >= 1000) {
            this.setState({ menuShow: true })
        }
        console.log(scrollTop)
    this.setState({
      transform: itemTranslate,
      transform2: (scrollTop/10 + 'px')
    });
    }

    render() {
        return(
            <div>
                <div>
                    <header className = "hero2-box">
                        <img className = "cyber-background" src = {backgif} style = {{transform: `translate(0, ${this.state.transform})`}}></img>
                        <div className = "cyber-guy"></div>
                        <div className = "name-gif" style = {{transform: `translate(0, ${this.state.transform})`}}>
                        <img src = {namegif} className="imggif"></img>
                        </div>
                    </header>

                    <section ref = {this.myRef} className = "content">
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
            </div>
        )
    }
}