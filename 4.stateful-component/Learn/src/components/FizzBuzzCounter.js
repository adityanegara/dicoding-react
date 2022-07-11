import React from "react";

class FizzBuzzCounter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
        }
    }

    handleIncreaseButtonClicked = () =>{
        this.setState((previousState) => {
            return {
                count : previousState.count + 1,
            }
        })
    }

    handleResetButtonClicked = () =>{
        this.setState({
            count: 0,
        })
    }

    renderCount = (count) =>{
        if(count === 0){
            return count;
        }else if((count % 5 === 0) && (count % 7 === 0)){
            return 'FizzBuzz';
        }else if(count % 5 === 0){
            return 'Fizz';
        }else if(count % 7 === 0){
            return 'Buzz'
        }
        return count;
    }   

    render(){
        return(
            <div>
                <button onClick={this.handleIncreaseButtonClicked}>+ increase</button>
                <p>{this.renderCount(this.state.count)}</p>
                <button onClick={this.handleResetButtonClicked}>- reset</button>
            </div>
        )
    }
}

export default FizzBuzzCounter;