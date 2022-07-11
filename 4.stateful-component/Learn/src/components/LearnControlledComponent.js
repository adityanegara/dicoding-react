import React from "react";

class LearnControlledComponents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            gender: 'Man'
        }
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
        this.onGenderChangeEventHander = this.onGenderChangeEventHander.bind(this);
    }
    onSubmitEventHandler = (event) =>{
        event.preventDefault();
        const message = 
        `
            Name: ${this.state.name}
            Email: ${this.state.email}
            Gender: ${this.state.gender}
        `
        alert(message);
    }

    onNameChangeEventHandler(event) {
        this.setState((prevState) =>{
            return{
                ...prevState,
                name: event.target.value
            }
        })
    }

    onEmailChangeEventHandler = (event) =>{
        this.setState((prevState) =>{
            return{
                ...prevState,
                email: event.target.value
            }
        })
    }

    onGenderChangeEventHander = (event) =>{
        this.setState((prevState) =>{
            return{
                ...prevState,
                gender: event.target.value
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.onSubmitEventHandler}>
                    <label for="name">Name : </label>
                    <input onChange={this.onNameChangeEventHandler} id="name" type="text" value={this.state.name}/>
                    <br/>
                    <label for="email">Email : </label>
                    <input onChange={this.onEmailChangeEventHandler} id="email" type="text" value={this.state.email}/>
                    <br/>
                    <label for="gender">Gender : </label>
                    <select onChange={this.onGenderChangeEventHander} id="gender" value={this.state.gender}>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                    </select>
                    <br/>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default LearnControlledComponents;