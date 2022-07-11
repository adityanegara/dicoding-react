import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({contacts, onDelete}) =>{
    const renderContacts = (contacts) =>{
        return contacts.map((contact) =>( <ContactItem id={contact.id} onDelete={onDelete} key={contact.id} {...contact}/>))
    }

    return(
        <div className="contact-list">
            {renderContacts(contacts)}
        </div>
    )
}

export default ContactList;