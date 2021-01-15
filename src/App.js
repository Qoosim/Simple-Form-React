import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4">
                        <form>
                            <h2>Hello {this.state.userName}</h2>
                            <input 
                                className="form-control"
                                type="text" 
                                placeholder="Enter username"
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
