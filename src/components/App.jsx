import React, { Component, Fragment } from 'react'


//let App = (props) => {
//return <h1>{props.name}</h1>
//}

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            text: 'Hello World',
            inputText: '',
            placeholder: 'This is a placeholder',
            hasLoaded: false
        }
    }

    handleClicked = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
    }

    handleChange = (e) => {
        this.setState({ inputText: e.target.value })
    }

    componentDidMount = () => {
        this.setState({ hasLoaded: true })
    }
    render() {
        if (this.state.hasLoaded === true) {
            return (
                <Fragment>
                    <h1>{this.props.name}</h1>
                    <h1>{this.state.react}</h1>
                    <input type="text" placeholder={this.state.placeholder} value={this.state.inputText} onChange={(e) => { this.handleChange(e) }} />
                    <h1>{this.state.inputText}</h1>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>Load!</button>
                </Fragment>
            )
        }
    }
}
    export default App;