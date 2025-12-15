import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-16 text-center text-4xl font-semibold">Get in Touch</h1>

            <div className="text-center space-y-4 text-lg text-neutral-300">
                <p>{CONTACT.address}</p>
                <p>{CONTACT.phoneNo}</p>
                <p>{CONTACT.email}</p>
            </div>
        </div>
    );
};

export default Contact;
