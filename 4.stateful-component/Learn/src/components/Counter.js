import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    handleIncreaseButton = () =>{
        this.setState((previousState) =>{
            return {
                count: previousState.count + 1
            }
        })
    }

    handleResetButton = () =>{
        this.setState({
            count: 0
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleIncreaseButton}>Increase</button>
                <button onClick={this.handleResetButton}>Reset</button>
            </div>
        )
    }
}

export default Counter;