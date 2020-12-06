import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState(
        {
            username: "",
            password: "",
            phone: "",
            message: "",
        }
    );

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    };

    const submit = () => {
        alert(`My name is ${data.username}. My phone number is ${data.phone}. My message for you is ${data.message}`);
    }

    return (
        <>
            <div className="header">
                <h1>Contact</h1>
            </div>
            <div className="form">

                <form onSubmit={submit}>
                    <div className="form_att">
                        <label> User Name: </label>
                        <input type="text" name="username"
                            value={data.username} placeholder="Enter your User Name" onChange={inputEvent} />
                    </div>
                    <div className="form_att">
                        <label> Password: </label>
                        <input type="password" name="password"
                            value={data.password} placeholder="Enter You Password" onChange={inputEvent} />
                    </div>
                    <div className="form_att">
                        <label> Phone Number: </label>
                        <input type="text" name="phone" value={data.phone} placeholder="Enter your number" onChange={inputEvent} />
                    </div>
                    <div className="form_att">
                        <label> Message: </label>
                        <textarea type="text" rows="5" name="message"
                            value={data.message} placeholder="Enter the  message" onChange={inputEvent} />
                    </div>
                    <div className="form_att">
                        <button className="button"> Submit </button>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Contact;