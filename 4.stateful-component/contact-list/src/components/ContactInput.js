import React from "react";

class ContactInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            tag: '',
        }
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler = (e) =>{
        this.setState((prevState) =>{
            return{
                ...prevState,
                name: e.target.value
            }
        })
    }

    onTagChangeEventHandler = (e) =>{
        this.setState((prevState) =>{
            return{
                ...prevState,
                tag: e.target.value
            }
        })
    }

    onSubmitEventHandler = (e) =>{
        e.preventDefault();
        this.props.addContact(this.state)
    }

    render(){
        return(
            <form onSubmit={this.onSubmitEventHandler} className="contact-input">
                <input onChange={this.onNameChangeEventHandler} type="text" placeholder="Nama"/>
                <input onChange={this.onTagChangeEventHandler} type="text" placeholder="Tag"/>
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default ContactInput;