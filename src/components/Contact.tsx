import React from 'react';

interface IPros {
    name: string;
    email?: string;
}
const Contact = ({ name, email = "N/A" }: IPros) => {
    return (
        <div className="card">
            <p>
                <strong>Name : </strong>{name}
            </p>
            <p>
                <strong>Email : </strong>{email}
            </p>
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