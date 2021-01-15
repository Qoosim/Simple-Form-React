import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '', 
            lastName: ''
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4">
                        <form>
                            <h2>Hello {this.state.firstName} {this.state.lastName}</h2>
                            <input 
                                className="form-control"
                                type="text" 
                                name="firstName"
                                placeholder="First Name"
                                onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                className="form-control"
                                type="text" 
                                name="lastName"
                                placeholder="Last Name"
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
