import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count : 10 };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => 
            ({ count: prevState.count + 1}));
        }, 3000)
    }

    render() {
        return (
            <h1>Count : {this.state.count}</h1>
        );
    }
}

export default Counter;