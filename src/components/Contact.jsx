import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <h1> ELÉRHETŐSÉGÜNK </h1>
            <form>
                <input type="text" placeholder="Teljes név" required/>
                <input type="text" placeholder="E-mail" required/>
                <textarea name="message" placeholder="Ide írjon......"></textarea>
                <input type="submit" value="Küldés"/>
            </form>
        </div>
    );
};

export default Contact;