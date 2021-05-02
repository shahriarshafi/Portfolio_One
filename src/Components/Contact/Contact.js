import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4wvjdln', 'template_o04hp5i', e.target, 'user_WlpAeWLFXfOuk29xIN5xd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            alert("Successfully Submitted");
    }
    return (
        <>
            <section id="contact">
                <div className="container bg-dark text-white rounded-3 mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 class="text-center my-5">Contact</h1>
                            <form onSubmit={sendEmail} class="w-50 m-auto">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Your Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Subject</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" name="subject" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Write To Me</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" name="message" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text"></div>
                                </div>
                                <p className="text-center"><button type="submit" class="btn btn-primary mb-5">Submit</button></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;