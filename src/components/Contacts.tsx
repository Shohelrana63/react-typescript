import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = () => {
    const [contact, setContact] = useState('');
    const [contactList, setContactList] = useState<string[]>([]);

    // console.log("contact", contact)
    const onClick = () => {
        setContactList([...contactList, contact])
        setContact('')
    }
    console.log("contactList", contactList)
    return (
        <div>
            <h1> Contact List</h1>
            <div className="form">
                <input
                    onChange={(e) => setContact(e.target.value)}
                    name='name'
                    placeholder='Contact Name'
                    type="text" />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((contactName) =>
                    <Contact key={contactName} name={contactName} />)

            }
            {/* <ContactDemo name='sp' /> */}
            {/* <Contact name="Shohel Rana" email="sr@gmail.com" />
            <Contact name="Shohel Rana Baig" email="srbaig@gmail.com" />
            <Contact name="Someone" /> */}
        </div>
    );
};

export default Contacts;