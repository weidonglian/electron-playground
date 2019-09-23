import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Index = () => {
    return (
        <React.Fragment>
            <h1>This is my electron app</h1>
            <div>Hello React!</div>
        </React.Fragment>
    )
}

ReactDOM.render(<Index />, document.getElementById('app'))