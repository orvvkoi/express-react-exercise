import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { response: '' };
    }

    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ response: res.response }))
            .catch((err) => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        const { response } = this.state;
        return (
            <div>
                <p>{response}</p>
            </div>
        );
    }
}

export default hot(module)(App);
