import { useState } from "react";
//import { useEffect } from "react";  
import axios from "axios"; 
import Swal from "sweetalert2"

function ContactForm () {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault()

        const data = {
            email,
            subject, 
            name,
            message
        }
        
        try {
            const response = await axios.post("http://localhost:5000/api/sendemail", data)
            console.log(response.data)
    
            if (response.status === 200) {
                Swal.fire({
                    title: "Message Delivered!",
                    text: "Your message was sent successfully",
                    icon: "success"
                  })
            } else {
                console.error('Error en la solicitud: ', response.status)
            }  

        } catch (error) {
            console.error('Error en la solicitud: ', error)
        }


    }

    return (
        <section id="contact" className="contact">
            <div className="contact_box">
                <h3>Contact 📧</h3>
                <article className="contact_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel vitae saepe! A quas assumenda modi. Qui iure, autem eaque sequi alias, suscipit in impedit neque dolores facere, libero quibusdam.
                </article>
                <div className="contact_form">
                    <form onSubmit={sendEmail} id="contact-form" action="send" method="post" encType="multipart/form-data">
                        <label htmlFor="name">Name: </label><br />
                        <input id="name" name="name" type="text" placeholder="Type your name..." value={name} onChange={(e) => setName(e.target.value)} required /><br/>
                        <label htmlFor="email">Email: </label><br />
                        <input type="email" name="email" id="email" placeholder="Type your email..." value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                        <label htmlFor="subject">Subject: </label><br />
                        <input type="text" name="subject" id="subject" placeholder="Type your contact reason..." value={subject} onChange={(e) => setSubject(e.target.value)} required /> <br />
                        <label htmlFor="message">Message: </label><br />
                        <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br /><br />
                        <button className="contact_button" type="submit" value="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm