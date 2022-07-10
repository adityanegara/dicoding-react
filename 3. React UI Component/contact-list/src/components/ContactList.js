import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({contacts}) =>{
    const renderContacts = (contacts) =>{
        return contacts.map((contact) =>( <ContactItem key={contact.id} {...contact}/>))
    }

    return(
        <div className="contact-list">
            {renderContacts(contacts)}
        </div>
    )
}

export default ContactList;