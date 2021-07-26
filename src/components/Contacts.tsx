import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string;
    email: string;
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact);
    const [contactList, setContactList] = useState<IContact[]>([]);

    // console.log("contact", contact)
    const onClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: '',
            email: ''
        })
    }
    console.log("contactList", contactList)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(ct =>
            ct.email !== email)
        setContactList(newContactList)
    }
    return (
        <div>
            <h1> Contact List</h1>
            <div className="form">
                <input
                    value={contact.name}
                    onChange={onChange}
                    name='name'
                    placeholder='Name'
                    type="text" />
                <input
                    value={contact.email}
                    onChange={onChange}
                    name='email'
                    placeholder='Email'
                    type="email" />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((addContact) =>
                    <Contact key={addContact.name} name={addContact.name}
                        email={addContact.email} handleRemove={handleRemove} />)

            }
            {/* <ContactDemo name='sp' /> */}
            {/* <Contact name="Shohel Rana" email="sr@gmail.com" />
            <Contact name="Shohel Rana Baig" email="srbaig@gmail.com" />
            <Contact name="Someone" /> */}
        </div>
    );
};

export default Contacts;