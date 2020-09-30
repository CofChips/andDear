import React, { useRef, useEffect } from "react";
import "./contact.css";
import Header from "../../components/Header/index";
import API from "../../utils/API";

function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const contentRef = useRef();

    useEffect(()=>{
        document.title = "Contact"
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        API.sendEmail({
            name: nameRef.current.value,
            email: emailRef.current.value,
            content: contentRef.current.value
        })
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
        nameRef.current.value = "";
        emailRef.current.value = "";
        contentRef.current.value = "";
    };

    return(
        <div className="container w-100 mt-5 auto">
            <Header header={"Contact"} />
            {/* <div className="row m-0 justify-content-center">
                <p className="m-0">Feel free to email me at <a className="linkRes" href="mailto:christopher.neal.lee@gmail.com">christopher.neal.lee@gmail.com</a> or through the form below.</p>
            </div> */}
            <div className="row m-0">
                <div className="col-md-12 p-0">
                    <section className="jumbotron bg-white py-2 px-1 my-5 mx-md-auto maxform">
                        <div className="container">
                            <form className="label-left" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="nameform">Name</label>
                                    <input type="text" className="form-control" id="nameForm" name="name"
                                        placeholder="Your Name" required ref={nameRef} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailForm">Email</label>
                                    <input type="email" className="form-control" id="emailForm" name="email"
                                        placeholder="example@gmail.com" required ref={emailRef} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textForm">Message</label>
                                    <textarea className="form-control" id="textForm" rows="8" name="message" required ref={contentRef}></textarea>
                                </div>
                                <button type="submit" value="Send" className="btn formButton" id="submitButton"
                                >Submit</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Contact;