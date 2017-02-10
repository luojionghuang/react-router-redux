import React from 'react'
import ReactDOM from 'react-dom'

const Hello = React.createClass({
    render() {
        return <h1>Hello World by ljh!</h1>;
    }
});

ReactDOM.render(<Hello />, document.getElementById('root'));