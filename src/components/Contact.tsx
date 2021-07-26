import React from 'react';

interface IPros {
    name: string;
    email?: string;
    handleRemove: (email: string) => void
}
const Contact = ({ name, email = "N/A", handleRemove }: IPros) => {
    return (
        <div className="card">
            <p>
                <strong>Name : </strong>{name}
            </p>
            <p>
                <strong>Email : </strong>{email}
            </p>
            <button onClick={() => handleRemove(email)}>Remove Contact</button>
        </div>
    );
};

// export const ContactDemo: React.FC<IPros> = ({ name, email = "N/A" }) => {
//     return (
//         <div className="card">
//             <p>
//                 <strong>Name : </strong>{name}
//             </p>
//             <p>
//                 <strong>Email : </strong>{email}
//             </p>
//         </div>
//     );
// };

export default Contact;